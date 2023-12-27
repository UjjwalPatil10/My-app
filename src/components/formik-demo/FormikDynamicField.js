import React from "react";
import { Formik, Form, FieldArray } from "formik";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
const FormikDynamicField = () => {
  return (
    <>
      <h3>Dynamic field</h3>

      <Card sx={{ maxWidth: 500, m: "auto", p: 2 }}>
        <Formik
          initialValues={{
            name: "",
            mobiles: [""], //mobiles takes in [""] because we make it dynamic and multiple mobile there
            city: "",
          }}
          onSubmit={(user) => {
            console.log("User: ", user);
          }}
        >
          {/* now we give callback {({})=>()} like this */}
          {({ values: user, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Name"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                  />
                </Grid>
                {/* we make mobiles dynamic(repeat) for that we take <FieldArray/>  */}
                <FieldArray
                  name="mobiles" //take same that we take in initialVakues(state)
                  // In arrayHelpers we get many methods like {push,remove,insert} and we destructure them
                  // render={({})=>()}
                  render={({ push, remove }) => (
                    <Grid item xs={12} container spacing={2}>
                      {user.mobiles &&
                        user.mobiles.length > 0 &&
                        user.mobiles.map((mob, index) => (
                          <Grid key={index} item xs={12}>
                            <Box sx={{ display: "flex" }}>
                              <TextField
                                sx={{ flex: "1 1 auto", mr: 1 }}
                                fullWidth
                                variant="outlined"
                                label="Mobile"
                                name={`mobiles.${index}`}
                                value={user.mobiles[index]}
                                onChange={handleChange}
                              />
                              {index == user?.mobiles?.length - 1 && (
                                <Button
                                  variant="contained"
                                  type="button"
                                  onClick={() => push("")} //push will add mobiles when we click on button
                                >
                                  +
                                </Button>
                              )}
                              {index != 0 && (
                                <Button
                                  sx={{ ml: 1 }}
                                  variant="contained"
                                  color="error"
                                  type="buttom"
                                  onClick={() => remove(index)}
                                >
                                  X
                                </Button>
                              )}
                            </Box>
                          </Grid>
                        ))}
                    </Grid>
                  )}
                />

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="City"
                    name="city"
                    value={user.city}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button variant="contained" type="submit" fullWidth>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Card>
    </>
  );
};

export default FormikDynamicField;
