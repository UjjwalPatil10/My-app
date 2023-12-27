import React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
// import { useForm } from "react-hook-form";
import {
  useForm,
  useFieldArray,
  useController,
  Controller,
} from "react-hook-form";
const MatrimonialDynamicForm = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    //DefaultValues:{}; you can populate the fields by this attribute
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });
  return (
    <>
      <Container>
        <Card sx={{ width: 500, m: "auto", p: 3 }}>
          <form onSubmit={handleSubmit((data) => console.log(data))}>
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
              <ul style={{ listStyle: "none" }}>
                {fields.map((item, index) => (
                  <li key={item.id}>
                    <input {...register(`test.${index}.firstName`)} />
                    <input {...register(`test.${index}.yesName`)} />
                    <Controller
                      render={({ field }) => <input {...field} />}
                      name={`test.${index}.lastName`}
                      control={control}
                    />

                    <button
                      type="button"
                      onClick={() =>
                        append({
                          firstName: "bill",
                          lastName: "luo",
                          yesName: "reva",
                        })
                      }
                    >
                      Add
                    </button>
                    <button type="button" onClick={() => remove(index)}>
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
              <Grid item xs={12}>
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
            {/* 
        <ul style={{ listStyle: "none" }}>
          {fields.map((item, index) => (
            <li key={item.id}>
              <input {...register(`test.${index}.firstName`)} />
              <input {...register(`test.${index}.yesName`)} />
              <Controller
                render={({ field }) => <input {...field} />}
                name={`test.${index}.lastName`}
                control={control}
              />

              <button
                type="button"
                onClick={() =>
                  append({
                    firstName: "bill",
                    lastName: "luo",
                    yesName: "reva",
                  })
                }
              >
                Add
              </button>
              <button type="button" onClick={() => remove(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul> */}

            {/* <button
          type="button"
          onClick={() =>
            append({ firstName: "bill", lastName: "luo", yesName: "reva" })
          }
        >
          append
        </button> */}
            {/* <input type="submit" /> */}
          </form>
        </Card>
      </Container>
    </>
  );
};

export default MatrimonialDynamicForm;
