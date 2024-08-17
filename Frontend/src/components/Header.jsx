// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";

// const HomePage = () => {
//   const [studentData, setStudentData] = useState([]);
//   const [teacherData, setTeacherData] = useState([]);

//   const StudentData = async () => {
//     const student = await axios.get("http://localhost:3005/api/getStudent");
//     setStudentData(student.data.data);
//     console.log(student.data.data);
//   };

//   const TeacherData = async () => {
//     const teacher = await axios.get("http://localhost:3005/api/getTeacher");
//     setTeacherData(teacher.data.data);
//     console.log(teacher.data.data);
//   };

//   useEffect(() => {
//     StudentData();
//     TeacherData();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100">
 
//       <header className="bg-white shadow-md py-4">
//         <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
   
//           <img src="public/logo.svg" className="mainImage" />
//           <nav className="space-x-6">
//             <a href="#" className="text-gray-800">
//               About Us
//             </a>
//             <a href="#" className="text-gray-800">
//               Our Work
//             </a>
//             <a href="#" className="text-gray-800">
//               News
//             </a>
//             <a href="#" className="text-gray-800">
//               Resources
//             </a>
//             <a href="#" className="text-gray-800">
//               Events
//             </a>
//           </nav>
//           <button
//             className="text-white px-4 py-2 rounded-lg"
//             style={{ backgroundColor: "rgb(0,118,129)" }}
//           >
//             Login or Join for Free
//           </button>
//         </div>
//       </header>

   
//       <main className="py-12">
//         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
       
//           {studentData.map((item, id) => {
//             return (
//               <div className="bg-white shadow-lg rounded-lg p-6">
//                 <div className="flex items-center mb-4">
//                   <span className="bg-indigo-500 text-white px-3 py-1 rounded-full">
//                     For students
//                   </span>
//                 </div>
//                 <img
//                   src="public/student-platform.svg"
//                   alt="For Students"
//                   className="w-full h-48 object-cover mb-4"
//                 />

//                 <h2 className="text-2xl font-semibold mb-4" key={id}>
//                   {item?.Title}
//                 </h2>

//                 <p className="text-gray-700 mb-4 " key={id}>
//                   {item?.Description}
//                 </p>

//                 <ul className="list-disc pl-6 text-gray-700 mb-4">
//                   <>
//                     <li key={id}>{item?.Feature1}</li>
//                     <li key={id}>{item?.Feature2}</li>
//                     <li key={id}>{item?.Feature3}</li>
//                     <li key={id}>{item?.Feature4}</li>
//                   </>
//                 </ul>

//                 <button
//                   className=" text-white px-6 py-2 rounded-lg mt-4"
//                   style={{ backgroundColor: "rgb(0,118,129)" }}
//                 >
//                   Start the Adventure now
//                 </button>
//                 <div className="mt-4 space-x-4">
//                   <a href="#" className="text-teal-600">
//                     Login
//                   </a>
//                   <a href="#" className="text-teal-600">
//                     Learn more
//                   </a>
//                 </div>
//               </div>
//             );
//           })}



//           {teacherData.map((item, id) => {
//             return (
//               <div className="bg-white shadow-lg rounded-lg p-6">
//                 <div className="flex items-center mb-4">
//                   <span className="bg-indigo-500 text-white px-3 py-1 rounded-full">
//                     For teachers
//                   </span>
//                 </div>
//                 <img
//                   src="public/teacher-platform.svg"
//                   alt="For Teachers"
//                   className="w-full h-48 object-cover mb-4"
//                 />
//                 <h2 className="text-2xl font-semibold mb-4">{item?.Title}</h2>
//                 <p className="text-gray-700 mb-4">{item?.Description}</p>
//                 <ul className="list-disc pl-6 text-gray-700 mb-4">
//                   <li>{item?.Feature1}</li>
//                   <li>{item?.Feature2}</li>
//                   <li>{item?.Feature3}</li>
//                   <li>{item?.Feature4}</li>
//                 </ul>
             
//                 <button
//                   style={{ backgroundColor: "rgb(0,118,129)" }}
//                   className=" text-white px-6 py-3 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
//                 >
//                   Start the Adventure now
//                 </button>

//                 <div className="mt-4 space-x-4">
//                   <a href="#" className="text-teal-600">
//                     Login
//                   </a>
//                   <a href="#" className="text-teal-600">
//                     Teacher Companion Guide
//                   </a>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default HomePage;


import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [studentData, setStudentData] = useState([]);
  const [teacherData, setTeacherData] = useState([]);

  const StudentData = async () => {
    const student = await axios.get("http://localhost:3005/api/getStudent");
    setStudentData(student.data.data);
    console.log(student.data.data);
  };

  const TeacherData = async () => {
    const teacher = await axios.get("http://localhost:3005/api/getTeacher");
    setTeacherData(teacher.data.data);
    console.log(teacher.data.data);
  };

  useEffect(() => {
    StudentData();
    TeacherData();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-md py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <img src="public/logo.svg" className="mainImage" />
          <nav className="space-x-6">
            <a href="#" className="text-gray-800">
              About Us
            </a>
            <a href="#" className="text-gray-800">
              Our Work
            </a>
            <a href="#" className="text-gray-800">
              News
            </a>
            <a href="#" className="text-gray-800">
              Resources
            </a>
            <a href="#" className="text-gray-800">
              Events
            </a>
          </nav>
          <button
            className="text-white px-4 py-2 rounded-lg"
            style={{ backgroundColor: "rgb(0,118,129)" }}
          >
            Login or Join for Free
          </button>
        </div>
      </header>

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {studentData.map((item, id) => {
            return (
              <div key={id} className="p-6 bg-white">
                <div className="mb-4">
                  <span className="bg-indigo-500 text-white px-3 py-1 rounded-full">
                    For students
                  </span>
                </div>
                <img
                  src="public/student-platform.svg"
                  alt="For Students"
                  className="w-full h-48 object-cover mb-4"
                />

                <h2 className=" studentTitle" >{item?.Title}</h2>

                <p className="studentDescription">{item?.Description}</p>

                <ul className="list-disc pl-6 text-gray-700 mb-4 studentFeatures">
                  <li>{item?.Feature1}</li>
                  <li>{item?.Feature2}</li>
                  <li>{item?.Feature3}</li>
                  <li>{item?.Feature4}</li>
                </ul>

                <button
                  className=" text-white px-6 py-2 rounded-lg mt-4 studentButton"
               
                >
                  Start the Adventure now
                </button>
                {/* <div className="mt-4 space-x-4">
                  <a href="#" className="text-teal-600">
                    Login
                  </a>
                  <a href="#" className="text-teal-600">
                    Learn more
                  </a>
                </div> */}
                                <div className="mt-4 flex justify-center space-x-4">
                  <div>
  <a href="#" className="text-teal-600">
    Login
  </a>
  </div>
  <div>
  <a href="#" className="text-teal-600">
    Student Companion Guide
  </a>
  </div>
</div>
              </div>
            );
          })}

          {teacherData.map((item, id) => {
            return (
              <div key={id} className="p-6 bg-white">
                <div className="mb-4">
                  <span className="bg-indigo-500 text-white px-3 py-1 rounded-full">
                    For teachers
                  </span>
                </div>
                <img
                  src="public/teacher-platform.svg"
                  alt="For Teachers"
                  className="w-full h-48 object-cover mb-4"
                />
                <h2 className="teacherTitle">{item?.Title}</h2>
                <p className="teacherDescription">{item?.Description}</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4 teacherFeatures">
                  <li>{item?.Feature1}</li>
                  <li>{item?.Feature2}</li>
                  <li>{item?.Feature3}</li>
                  <li>{item?.Feature4}</li>
                </ul>

                <button
                  className=" text-white px-6 py-3 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 teacherButton"
           
                >
                  Start the Adventure now
                </button>

                {/* <div className="mt-4 space-x-4">
                  <div>
                  <a href="#" className="text-teal-600" >
                    Login
                  </a>
                  </div>
                  <a href="#" className="text-teal-600">
                    Teacher Companion Guide
                  </a>
                </div> */}
                <div className="mt-4 flex justify-center space-x-4">
                  <div>
  <a href="#" className="text-teal-600">
    Login
  </a>
  </div>
  <div>
  <a href="#" className="text-teal-600">
    Teacher Companion Guide
  </a>
  </div>
</div>

              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
