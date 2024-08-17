import express from "express";
import StudentLandingSchema from "../Schema/StudentLandingPage.js";
import StudentData from "../Data/StudentData.js";
import { message } from "antd";

const StudentRoute = express.Router();

StudentRoute.post("/student", async (req, res) => {
  try {
    const data = await StudentLandingSchema.insertMany(StudentData);
    res.send({
      message: "studentdata posted successfully",
      data: data,
      status: 200,
    });
  } catch (err) {
    console.log(err, "error posting the details");
  }
});

StudentRoute.get("/getStudent", async (req, res) => {
  try {
    const data = await StudentLandingSchema.find();
    res.send({
      message: "student data sent successfully",
      data: data,
      status: 200,
    });
  } catch (err) {
    console.log(err, "error recieving the details");
  }
});
export default StudentRoute;
