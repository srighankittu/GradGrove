import express from "express";
import TeacherLandingSchema from "../Schema/TeacherLandingPage.js";
const TeacherRoute = express.Router();
TeacherRoute.get("/getTeacher", async (req, res) => {
  try {
    const data = await TeacherLandingSchema.find();
    res.send({
      message: "student data sent successfully",
      data: data,
      status: 200,
    });
  } catch (err) {
    res.send("error occurred",err)
  }
});
export default TeacherRoute;
