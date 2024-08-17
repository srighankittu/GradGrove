import express from "express";
import TeacherLandingSchema from "../Schema/TeacherLandingPage.js";
import TeacherData from "../Data/TeacherData.js";

const TeacherRoute = express.Router();

TeacherRoute.post("/teacher", async (req, res) => {
  try {
    const data = await TeacherLandingSchema.insertMany(TeacherData);
    res.send({
      message: "studentdata posted successfully",
      data: data,
      status: 200,
    });
  } catch (err) {
    console.log(err, "error posting the details");
  }
});

TeacherRoute.get("/getTeacher", async (req, res) => {
  try {
    const data = await TeacherLandingSchema.find();
    res.send({
      message: "student data sent successfully",
      data: data,
      status: 200,
    });
  } catch (err) {
    console.log(err, "error recieving the details");
  }
});
export default TeacherRoute;
