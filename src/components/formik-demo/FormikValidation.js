import React from "react";
import { Formik } from "formik";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// import { object, string, number, date, InferType } from "yup";

// let userSchema = object({
//   name: object({
//     first: string().required("First Name is required"),
//     last: string().required("Last Name is required"),
//   }),
//   age: number().required().positive().integer(),
//   email: string().email(),
//   mobile: string()
//     .required("Mobile is required")
//     .matches(/^[0-9]{10}$/, "Mobile must be 10 digit!"),
// });

// npm i yup
import { object, string, number, date, InterType } from "yup";
let userSchema = object({
  name: object({
    first: string().required("First Name is Required"),
    last: string().required("Last Name is Required"),
  }),
  mobile: string()
    .required("Mobile is required")
    .matches(/^[0-9]{10}$/, "Mobile must be 10 digit"),
  email: string().email(),
});

const FormikValidation = () => {
  return (
    <>
      <Container>
        <h3>Formik Validation</h3>
        <Card sx={{ maxWidth: 500, m: "auto", p: 2 }}>
          <Formik
            initialValues={{
              name: {
                first: "",
                last: "",
              },
              mobile: "",
              email: "",
              password: "",
            }}
            validationSchema={userSchema}
            // validate={(user) => {
            //   let errors = {};
            //   if (!user.email) {
            //     errors.email = "Name is required";
            //   } else if (user?.email?.length < 3) {
            //     errors.email = "Name must atleast 3 chars long!";
            //   }

            //   if (!user.mobile) {
            //     errors.mobile = "Mobile is required";
            //     //here test is give boolean value true or false
            //   } else if (!/^[0-9]{10}$/.test(user.mobile)) {
            //     // regular expression is used for mobile pattern
            //     errors.mobile = "Mobile must be 10 digit";
            //   }
            //   return errors;
            // }}

            onSubmit={(values) => {
              console.log("User: ", values);
            }}
          >

            
            {({
              values: user,
              errors,
              touched,
              handleSubmit,
              handleChange,
              handleBlur,
            }) => (
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="First Name"
                      name="name.first"
                      value={user.name.first}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Last Name"
                      name="name.last"
                      value={user.name.last}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Mobile"
                      name="mobile"
                      value={user?.mobile}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors?.mobile && touched?.mobile ? true : false}
                      helperText={touched?.mobile && errors?.mobile}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Email"
                      name="email"
                      type="email"
                      value={user?.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors?.email && touched?.email ? true : false}
                      helperText={touched?.email && errors?.email}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      label="Password"
                      name="password"
                      type="password"
                      value={user?.password}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" fullWidth variant="contained">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </Card>
      </Container>
    </>
  );
};

export default FormikValidation;

// For Practice
// import React from "react";
// import { Form, Formik } from "formik";
// import Container from "@mui/material/Container";
// import Card from "@mui/material/Card";
// import Grid from "@mui/material/Grid";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// const FormikValidation = () => {
//   return (
//     <>
//       <Container>
//         <h3>Formik Validation</h3>
//         <Formik
//           initialValues={{
//             name: {
//               first: "",
//               last: "",
//             },
//             mobile: "",
//             email: "",
//             password: "",
//           }}
//           onSubmit={(values) => {
//             console.log("Formik User: ", values);
//           }}
//           validate={(user) => {
//             let errors = {};
//             if (!user.email) {
//               errors.email = "Email is Required";
//             } else if (user?.email?.length < 3) {
//               errors.email = "Email must be 3 chars long!";
//             }
//             if (!user.mobile) {
//               errors.mobile = "Mobile is required";
//             } else if (!/^[0-9]{10}$/.test(user.mobile)) {
//               errors.mobile = "Mobile must be 10 digit";
//             }
//             return errors;
//           }}
//         >
//           {({
//             values: user,
//             errors,
//             touched,
//             handleChange,
//             handleSubmit,
//             handleBlur,
//           }) => {
//             return (
//               <Card sx={{ maxWidth: 500, m: "auto", p: 2 }}>
//                 <Form onSubmit={handleSubmit}>
//                   <Grid container spacing={2}>
//                     <Grid item xs={12} md={6}>
//                       <TextField
//                         variant="outlined"
//                         fullWidth
//                         name="name.first"
//                         label="First Name"
//                         value={user.name.first}
//                         onChange={handleChange}
//                         onChange={handleBlur}
//                       />
//                     </Grid>

//                     <Grid item xs={12} md={6}>
//                       <TextField
//                         variant="outlined"
//                         fullWidth
//                         name="name.last"
//                         label="Last Name"
//                         value={user.name.last}
//                         onChange={handleChange}
//                         onChange={handleBlur}
//                       />
//                     </Grid>

//                     <Grid item xs={12}>
//                       <TextField
//                         variant="outlined"
//                         fullWidth
//                         name="Mobile"
//                         label="mobile"
//                         value={user?.mobile}
//                         onChange={handleChange}
//                         onChange={handleBlur}
//                         error={errors?.mobile && touched?.mobile ? true : false}
//                         helperText={touched?.mobile && errors?.mobile}
//                       />
//                     </Grid>

//                     <Grid item xs={12}>
//                       <TextField
//                         variant="outlined"
//                         fullWidth
//                         name="email"
//                         label="email"
//                         type="email"
//                         value={user?.email}
//                         error={errors?.email && touched?.email ? true : false}
//                         helperText={touched?.email && errors?.email}
//                         onChange={handleChange}
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <TextField
//                         variant="outlined"
//                         fullWidth
//                         name="Password"
//                         type="password"
//                         label="password"
//                         value={user?.password}
//                         onChange={handleChange}
//                       />
//                     </Grid>
//                     <Grid item xs={12}>
//                       {/* below we take type="submit" because we take inside <form></form> */}
//                       <Button
//                         type="submit"
//                         fullWidth
//                         variant="contained"
//                         onClick={handleSubmit}
//                       >
//                         Submit
//                       </Button>
//                     </Grid>
//                   </Grid>
//                 </Form>
//               </Card>
//             );
//           }}
//         </Formik>

{
  /* {
          <Card sx={{ maxWidth: 500, m: "auto" }}>
            <Grid container spacing={2}>
              <Grid item>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="name"
                  label="Name"
                ></TextField>
              </Grid>

              <Grid item>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="name"
                  label="Name"
                ></TextField>
              </Grid>

              <Grid item>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="name"
                  label="Name"
                ></TextField>
              </Grid>

              <Grid item>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="name"
                  label="Name"
                ></TextField>
              </Grid>
              <Grid item>
                <Button>Submit</Button>
              </Grid>
            </Grid>
          </Card>
        } */
}
//       </Container>
//     </>
//   );
// };

// export default FormikValidation;
