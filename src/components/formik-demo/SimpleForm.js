import React from "react";
import { Formik } from "formik";
const SimpleForm = () => {
  return (
    <>
      <h2>Formik Form</h2>
      <Formik
        initialValues={{
          name: "",
          mobile: "",
          email: "",
        }}
        onSubmit={(user) => {
          console.log("Formik User:", user);
        }}
      >
        {({ handleChange, handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input type="text" name="name" onChange={handleChange} />
              <br />

              <label>Mobile</label>
              <input type="tel" name="mobile" onChange={handleChange} />
              <br />

              <label>Email</label>
              <input type="email" name="email" onChange={handleChange} />
              <br />
              <input type="submit" />
            </form>
          );
        }}
      </Formik>
    </>
  );
};

export default SimpleForm;

// Simple Form
// import React, { useState } from "react";
// import { Formik } from "formik";
// import { number } from "prop-types";
// const SimpleForm = () => {
//   const [user, setUser] = useState({});
//   const handleChange = (e) => {
//     const { value, name } = e.target;
//     setUser({ ...user, [name]: value });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("User: ", user);
//   };
//   return (
//     <>
//       <h2>Simple Form</h2>
//       {/*
//       <Formik
//         initialValues={
//           //initialValues is state which is object {}
//           {
//             name: "",
//             mobile: "",
//             email: "",
//           }
//         }
//         onSubmit={(user) => {
//           // e.preventDefault();
//           console.log("Formik user: ", user);
//         }}
//       >
//         {({ handleChange, handleSubmit }) => {
//           return (
//             <form onSubmit={handleSubmit}>
//               <label>Name</label>
//               <input type="text" name="name" onChange={handleChange} />
//               <br />
//               <label>Mobile</label>
//               <input type="text" name="mobile" onChange={handleChange} />
//               <br />
//               <label>Email</label>
//               <input type="text" name="email" onChange={handleChange} />
//               <br />
//               <input type="submit" />
//             </form>
//           );
//         }}
//       </Formik> */}

//       <form onSubmit={handleSubmit}>
//         <label>Name</label>
//         <input type="text" name="name" onChange={handleChange} />
//         <br />
//         <label>Mobile</label>
//         <input type="text" name="mobile" onChange={handleChange} />
//         <br />
//         <label>Email</label>
//         <input type="text" name="email" onChange={handleChange} />
//         <br />
//         <input type="submit" />
//       </form>
//     </>
//   );
// };

// export default SimpleForm;
