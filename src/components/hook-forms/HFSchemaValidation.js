import React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"; //npm i @hookform/resolvers

const userSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Too Short")
    .max(20, "Too Long"),
  mobile: yup
    .string()
    .required("Mobile is required")
    .matches(/^[\d+]{10}$/, "Mobile must be 10 digit"),
});
const HFSchemaValidation = () => {
  const {
    register,
    formState: { errors, touchedFields, isDirty },
    handleSubmit,
  } = useForm({ resolver: yupResolver(userSchema) });

  return (
    <>
      <h3>Hook Form Validation</h3>
      <Card sx={{ width: 500, m: "auto", p: 3 }}>
        <form onSubmit={handleSubmit(console.log)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Name"
                {...register("name")}
                helperText={isDirty && errors?.name?.message}
                error={errors?.name ? true : false}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Mobile"
                {...register("mobile")}
                helperText={isDirty && errors?.mobile?.message}
                error={errors?.mobile && touchedFields?.mobile ? true : false}
              />
              <Grid item xs={12}>
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Card>
    </>
  );
};

export default HFSchemaValidation;
