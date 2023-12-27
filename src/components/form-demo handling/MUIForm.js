import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Card } from "@mui/material";
import MUIDataTable from "mui-datatables";
import MUIDatatableDemo from "../material-design/MUIDatatable";
const MUIForm = () => {
  const [user, setUser] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });
  const [userList, setUserList] = useState([]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    if (!user.name) {
      return;
    }
    console.log("user: ", user);
    setUserList([...userList, user]); //here we copy existing user and add one user
    setUser({
      name: "",
      mobile: "",
      email: "",
      password: "",
    });
  };
  return (
    <>
      <Container>
        <h3>MUI Forms,Name:{user.name}</h3>
        <Card sx={{ p: 2, maxWidth: 500, m: "auto" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="name"
                name="name"
                value={user.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Mobile"
                name="mobile"
                value={user.mobile}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Email"
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={user.password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              {/* if we want to submit form for that we take data inside form and give that form type="submit" */}
              <Button variant="contained" onClick={handleSubmit}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Card>
        <hr />
        <MUIDatatableDemo data={userList} />
      </Container>
    </>
  );
};

export default MUIForm;
