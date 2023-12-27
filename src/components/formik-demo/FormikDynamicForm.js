import React from "react";
import { Formik, FieldArray } from "formik";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { Styled } from "@mui/material";

const FormikDynamicForm = () => {
  return (
    <Container>
      <Paper
        sx={{
          p: 2,
          backgroundColor: "primary.main",
        }}
      >
        <Typography component="h1" color="white">
          Flight Booking
        </Typography>
      </Paper>

      <Card sx={{ width: "90vw", m: "auto", p: 2 }}>
        <Formik
          initialValues={{
            source: "",
            destination: "",
            doj: "",
            passengers: [{ name: "", age: "", gender: "" }],
          }}
          onSubmit={(values) => {
            console.log("Flight: ", values);
          }}
        >
          {/* {
            ({ values, handleChange, handleSubmit, resetForm })=>()
          } */}
          {({ values, handleChange, handleSubmit, resetForm }) => (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    size="small"
                    label="From"
                    // type="date"
                    value={values.source}
                    name="source"
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} md={4}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    size="small"
                    label="To"
                    // type="date"
                    value={values.destination}
                    name="destination"
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} md={4}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    size="small"
                    label="DOJ"
                    type="date"
                    value={values.doj}
                    name="doj"
                    onChange={handleChange}
                  />
                </Grid>

                {/* passengers start */}
                <FieldArray
                  name="passengers"
                  render={({ push, remove }) => (
                    <Grid item xs={12}>
                      {Array.isArray(values.passengers) &&
                        values?.passengers?.map((pass, i) => {
                          return (
                            <Card
                              key={i}
                              sx={{
                                backgroundColor: "#eee9",
                                p: 2,
                              }}
                            >
                              <Grid container spacing={2}>
                                <Grid item xs={12} md={4}>
                                  <TextField
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    label="Name"
                                    // type="date"
                                    value={values?.passengers[i]?.name}
                                    name={`passengers.${i}.name`}
                                    onChange={handleChange}
                                  />
                                </Grid>

                                <Grid item xs={12} md={3}>
                                  <TextField
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    label="Age"
                                    type="number"
                                    value={values?.passengers[i]?.age}
                                    name={`passengers.${i}.age`}
                                    onChange={handleChange}
                                  />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                  <TextField
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    label="Gender"
                                    // type="date"
                                    value={values?.passengers[i]?.gender}
                                    name={`passengers.${i}.gender`}
                                    onChange={handleChange}
                                  />
                                </Grid>
                                <Grid item xs={12} md={2}>
                                  <Box>
                                    {i == values?.passengers?.length - 1 && (
                                      <Button
                                        sx={{ mr: 1 }}
                                        variant="contained"
                                        onClick={() =>
                                          push({
                                            name: "",
                                            age: "",
                                            gender: "",
                                          })
                                        }
                                      >
                                        +
                                      </Button>
                                    )}

                                    {i != 0 && (
                                      <Button
                                        // sx={{ m: 1 }}
                                        color="error"
                                        variant="contained"
                                        onClick={() => remove(i)}
                                      >
                                        X
                                      </Button>
                                    )}
                                  </Box>
                                </Grid>
                              </Grid>
                            </Card>
                          );
                        })}
                    </Grid>
                  )}
                />

                {/* passengers end  */}

                <Grid item xs={12} sx={{ m: 2 }}>
                  <Button
                    sx={{ m: 2 }}
                    variant="contained"
                    type="button"
                    color="secondary"
                    onClick={resetForm}
                  >
                    Clear
                  </Button>
                  <Button
                    variant="contained"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </Card>
    </Container>
  );
};

export default FormikDynamicForm;
