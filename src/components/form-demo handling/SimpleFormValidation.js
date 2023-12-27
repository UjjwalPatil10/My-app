import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
const SimpleFormValidation = () => {
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    //  const value =   e.target.value
    //  const name =   e.target.name
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User: ", user);
  };

  const validate = () => {
    let errors = {};
    if (!user.name) {
      errors.name = "Name is required";
    } else if (user?.name?.length < 3) {
      errors.name = "Name must at least 3 chars long!";
    }

    // if (!user.email) {
    //   errors.email = "Email is required";
    // } else if (user?.email?.length < 3) {
    //   errors.email = "Email must at least 3 chars long!";
    // }

    if (!user.mobile) {
      errors.mobile = "Mobile is required";
    } else if (!/^[0-9]{10}$/.test(user.mobile)) {
      errors.mobile = "Mobile must be 10 digit!";
    }

    setErrors(errors);
  };

  useEffect(() => {
    validate();
  }, [user]);

  return (
    <>
      <Container>
        <h2>Simple Form Validation</h2>
        <Card sx={{ maxWidth: 500, m: "auto", p: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
              />
              <p style={{ color: "red" }}>{errors?.name}</p>
            </Grid>
            {/* <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Name"
                type="text"
                name="name"
                value={user.name}
                error={errors?.name ? true : false} //In mui errors field give red border to textField
                helperText={errors?.name} //it is for display error message
                onChange={handleChange}
              />
            </Grid> */}

            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Mobile"
                name="mobile"
                value={user.mobile}
                error={errors?.mobile ? true : false}
                helperText={errors?.mobile}
                onChange={handleChange}
              />
            </Grid>
            {/* <Grid item>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
              <p sx={{ color: "red" }}>{errors.email}</p>
            </Grid> */}
            <Grid item>
              <Button variant="contained" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  );
};

export default SimpleFormValidation;

// FOR PRACTICE

// import React, { useEffect, useState } from "react";
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import Container from "@mui/material/Container";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// const SimpleFormValidation = () => {
//   const [user, setUser] = useState({});
//   //user enter value and that value is correct or not that we need to check for that we maintain a state
//   const [errors, setErrors] = useState({});
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     // const value = e.target.value;
//     // const name = e.target.name;
//     setUser({ ...user, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("User: ", user);
//   };
//   const validate = () => {
//     let errors = {};
//     if (!user.name) {
//       errors.name = "Name is required!";
//     } else if (user?.name?.length < 3) {
//       errors.name = "Name must atleast 3 chars long!";
//     }

//     if (!user.mobile) {
//       errors.mobile = "Mobile is required!";
//     } else if (!/^[0-9]{10}$/.test(user.mobile)) {
//       //here test is give boolean value true or false
//       errors.mobile = "Mobile must be 10 digit!";
//     }
//     setErrors(errors);
//   };
//   // Whenever there is change in user we call validate() function
//   // whenever there are changes in user,call validate()
//   useEffect(() => {
//     validate();
//   }, [user]); //we provide callback and dependency array
//   return (
//     <>
//       <Container>
//         <h3>Simple Form Validation</h3>
//         <Card sx={{ maxWidth: 600, margin: "auto", p: 2 }}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <label htmlFor="uname">Name</label>
//               <input
//                 type="text"
//                 id="uname"
//                 name="name"
//                 onChange={handleChange}
//               />
//               <p style={{ color: "red" }}>{errors?.name}</p>
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 label="Mobile"
//                 name="mobile"
//                 onChange={handleChange}
//                 error={errors?.mobile ? true : false} //in Mui there is error field which show error in red border
//                 helperText={errors?.mobile} //in Mui to display error message there is helperText
//               />
//             </Grid>
//             <Grid item>
//               <Button variant="contained" onClick={handleSubmit}>
//                 Submit
//               </Button>
//             </Grid>
//           </Grid>
//         </Card>
//       </Container>
//     </>
//   );
// };

// export default SimpleFormValidation;

// FOR PRACTICE

// import React, { useEffect, useState } from "react";
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import Card from "@mui/material/Card";
// const SimpleFormValidation = () => {
//   const [user, setUser] = useState({});
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("User: ", user);
//   };

//   const validate = () => {
//     let errors = {};
//     if (!user.name) {
//       errors.name = "Name is required";
//     } else if (user?.name?.length < 3) {
//       errors.name = "Name must atleast 3 chars long!";
//     }

//     if (!user.mobile) {
//       errors.mobile = "Mobile is required";
//     } else if (!/^[0-9]{10}$/.test(user.mobile)) {
//       errors.mobile = "Mobile must be 10 digit";
//     }
//     setErrors(errors);
//   };
//   //Whenever there are changes in the user, call Validate()
//   useEffect(() => {
//     validate();
//   }, [user]);

//   return (
//     <>
//       <Container>
//         <h3>Simple Form Validation</h3>
//         {/* below sx is (system) is used for styling in Mui  */}
//         <Card sx={{ maxWidth: 500, margin: "auto", p: 2 }}>
//           <Grid container spacing={2}>
//             {/* below xs is breakpoint in Mui  */}
//             {/* xs,sm,md,ld,xl are the breakpoints in Mui  */}
//             <Grid item xs={12}>
//               <label htmlFor="uname">Name</label>
//               <input
//                 type="text"
//                 id="uname"
//                 name="name"
//                 onChange={handleChange}
//               />
//               <p style={{ color: "red" }}>{errors?.name}</p>
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 label="Mobile"
//                 name="mobile"
//                 onChange={handleChange}
//                 erroe={errors?.mobile ? true : false}
//                 helperText={errors?.mobile}
//               />
//             </Grid>
//             <Grid item>
//               <Button variant="contained" onClick={handleSubmit}>
//                 Submit
//               </Button>
//             </Grid>
//           </Grid>
//         </Card>
//       </Container>
//     </>
//   );
// };

// export default SimpleFormValidation;
