import React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
const HFValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <Container>
        <h3>Hook form validation</h3>
        <Card sx={{ width: 500, m: "auto", p: 3 }}>
          {/* below we give a callback (console.log) to handleSubmit and handleSubmit internally call to log and pass data to it and log will print it */}

          <form onSubmit={handleSubmit(console.log)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Name"
                  {...register("name", { minLength: 3 })}
                  error={errors?.name ? true : false} //error field give red border
                  helperText={
                    //helperText is for display messages
                    errors?.name?.type == "minLength" &&
                    "Name must be atleast 3 characters"
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Mobile"
                  {...register("mobile", { pattern: /^[\d+]{10}$/ })}
                  error={errors?.mobile ? true : false}
                  helperText={
                    errors?.mobile?.type == "pattern" &&
                    "Mobile must be 10 digit"
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Container>
    </>
  );
};

export default HFValidation;
