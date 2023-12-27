import React, { useState } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

const Register = ({ getUser }) => {
  const [user, setUser] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getUser(user);
    e.target.reset(); //to clear(reset) textfield
  };
  return (
    <>
      <Container>
        <Card sx={{ width: 500, m: "auto", p: 2 }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Name"
                  name="name"
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Mobile"
                  name="mobile"
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Email"
                  name="email"
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="City"
                  name="city"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" type="submit">
                  Register
                </Button>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Container>
    </>
  );
};

export default Register;
