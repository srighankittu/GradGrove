import express from "express";
import StudentLandingSchema from "../Schema/StudentLandingPage.js";
import StudentSignUpDetails from "../Schema/StudentSignUpDetails.js";
import jwt from "jsonwebtoken";
import StudentLoginSchema from "../Schema/StudentLoginSchema.js";
const StudentRoute = express.Router();
StudentRoute.get("/getStudent", async (req, res) => {
  try {
    const data = await StudentLandingSchema.find();
    res.send({
      message: "student data sent successfully",
      data: data,
      status: 200,
    });
  } catch (err) {
    res.send(err, "error occurred");
  }
});
StudentRoute.post("/studentSignUpDetails", async (req, res) => {
  try {
    const { name, dob, age, gender, fieldStudy, phoneNumber, email, password } =
      req.body;

    const StudentSignUpdetails = new StudentSignUpDetails({
      Name: name,
      DOB: dob,
      Age: age,
      Gender: gender,
      FieldofStudy: fieldStudy,
      PhoneNumber: phoneNumber,
      Email: email,
      Password: password,
    });
    const studentSignUpDetailsPosting = await StudentSignUpdetails.save();
    res.send({
      message: "student signup details posted successfully",
      data: studentSignUpDetailsPosting,
      status: 200,
    });

    StudentRoute.get("/getToken", async (req, res) => {
      const token = jwt.sign({ userId: details2._id }, "my secret key");
      res.send(token);
    });
  } catch (err) {
    res.send(err, "error occurred");
  }
});
StudentRoute.post("/studentLoginDetails", async (req, res) => {
  const { Email, Password } = req.body;

  const studentLoginDetails = new StudentLoginSchema({
    Email: Email,
    Password: Password,
  });
  const studentLoginDetailsPosting = await studentLoginDetails.save();
  res.send({
    message: "studentlogin details posted successfully",
    data: studentLoginDetailsPosting,
    status: 200,
  });
  StudentRoute.get("/getStudentLoginToken", async (req, res) => {
    const token = jwt.sign({ userId: details1._id }, "my secret key");
    res.send(token);
  });
});
StudentRoute.get("/studentSignUpDetails", async (req, res) => {
  const studentSignupdetails = await StudentSignUpDetails.find();
  res.send(studentSignupdetails);
});

export default StudentRoute;
