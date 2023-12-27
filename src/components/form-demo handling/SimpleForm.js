import React, { useState } from "react";

//FormHandling: Users enter data and we store that data to somewhere
const SimpleForm = () => {
  const [user, setUser] = useState({});
  const handleChange = (e) => {
    const { value, name } = e.target; //we do object destructuring
    setUser({ ...user, [name]: value }); //we use ...user because we want to keep existing value also when we enter value in textfield
  };
  const handleSubmit = (e) => {
    e.preventDefault(); //e.preventDefault() we don't want to submit a form that;s why we use
    console.log("User: ", user);
  };

  return (
    <>
      <h2 style={{ color: "#f05226" }}>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Form Control:<label></label>, <input/>,<textarea></textarea><datalist></datalist> */}
        {/* Form Input(type):text,tel,email,password,radio,checbox,submit,button,hidden  */}
        {/* Form attributes/validation:type,value,name,readonly,required,pattern,accept,method,min,max,minlength,maxlength  */}
        {/* Form Submission: 1. get-> Data display in Url
        2.post:Data display in body(request body) it's a binary */}
        <div
          style={{
            display: "flex",
            margin: "auto",
            justifyContent: "space-evenly",
            flexDirection: "column",
            width: "350px",
            // border: "1px solid #ddd",
          }}
        >
          <label style={{ fontSize: "18px", fontWeight: "600" }}>Name :</label>
          <input
            style={{ height: "28px", border: "2px solid #42c8f5" }}
            type="text"
            name="name"
            onChange={handleChange}
          />
          <br />

          <label style={{ fontSize: "18px", fontWeight: "600" }}>
            Mobile :{" "}
          </label>
          <input
            style={{ height: "28px", border: "2px solid gray" }}
            type="tel"
            name="mobile"
            onChange={handleChange}
          />
          <br />

          <label style={{ fontSize: "18px", fontWeight: "600" }}>Email :</label>
          <input
            style={{ height: "28px", border: "2px solid gray" }}
            type="email"
            name="email"
            onChange={handleChange}
          />
          <br />

          <label style={{ fontSize: "18px", fontWeight: "600", color: "red" }}>
            Password :
          </label>
          <input
            style={{ height: "28px", border: "2px solid red" }}
            type="password"
            name="password"
            onChange={handleChange}
          />
          <br />
        </div>
        <input
          style={{
            display: " flex",
            margin: "auto",
            backgroundColor: "#f542cb",
            color: "#fff",
            height: "30px",
            width: "90px",
            justifyContent: "center",
            borderRadius: "10px",
          }}
          type="submit"
          value="Register"
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default SimpleForm;

// import React, { useState } from "react";
// const SimpleForm = () => {
//   const [user, setUser] = useState({
//     name: "",
//     mobile: "",
//     email: "",
//     password: "",
//   });

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
//       <h3>Simple Form</h3>

//       <form onSubmit={handleSubmit}>
//         <label>Name</label>
//         <input type="text" name="name" onChange={handleChange} /> <br />
//         <label>Mobile</label>
//         <input type="tel" name="mobile" onChange={handleChange} /> <br />
//         <label>Email</label>
//         <input type="email" name="email" onChange={handleChange} /> <br />
//         <label>Password</label>
//         <input type="password" name="password" onChange={handleChange} /> <br />
//         <input type="submit" value="Register" />
//       </form>
//     </>
//   );
// };

// export default SimpleForm;

// FOR PRACTICE
// Normal Form and formik comparison

// import React, { useState } from "react";

// import { Formik } from "formik";

// const SimpleForm = () => {
//   // const [user, setUser] = useState({});

//   // const handleChange = (e) => {
//   //   const { value, name } = e.target;
//   //   setUser({ ...user, [name]: value });
//   // };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   console.log("User: ", user);
//   // };

//   return (
//     <>
//       <h2>Normal Form</h2>

//       <Formik
//         initialValues={{
//           name: "",
//           mobile: "",
//           email: "",
//           password: "",
//         }}
//         onSubmit={(user) => {
//           console.log("Formik User: ", user);
//         }}
//       >
//         {({ handleChange, handleSubmit }) => {
//           return (
//             <form onSubmit={handleSubmit}>
//               <label>Name</label>
//               <input type="text" name="name" onChange={handleChange} />
//               <br />
//               <label>Mobile</label>
//               <input type="tel" name="mobile" onChange={handleChange} />
//               <br />
//               <label>Email</label>
//               <input type="email" name="email" onChange={handleChange} />
//               <br />
//               <label>Password</label>
//               <input type="password" name="password" onChange={handleChange} />
//               <br />
//               <input type="submit" onClick={handleSubmit} />
//             </form>
//           );
//         }}
//       </Formik>
//       {/* <form onSubmit={handleSubmit}>
//         <label>Name</label>
//         <input type="text" name="name" onChange={handleChange} />
//         <br />
//         <label>Mobile</label>
//         <input type="tel" name="mobile" onChange={handleChange} />
//         <br />
//         <label>Email</label>
//         <input type="email" name="email" onChange={handleChange} />
//         <br />
//         <label>Password</label>
//         <input type="password" name="password" onChange={handleChange} />
//         <br />
//         <input type="submit" onClick={handleSubmit} />
//       </form>

//      */}
//     </>
//   );
// };

// export default SimpleForm;
