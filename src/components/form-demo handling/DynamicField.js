import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { Box } from "@mui/material";

const DynamicField = () => {
  const [user, setUser] = useState({
    name: "",
    mobile: [{ key: 1, value: "" }], //mobile make dynamic hence we take it in Array []
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleMobileChange = (e) => {
    const { name: key, value } = e.target;
    const arr = [...user.mobile];
    const index = arr.findIndex((mob) => mob.key == key);
    arr.splice(index, 1, { key: parseInt(key), value });
    setUser({ ...user, mobile: arr });
  };

  const addMobile = () => {
    const maxKey = user?.mobile?.reduce((pKey, { key }) => {
      return pKey > key ? pKey : key;
    }, 0);

    if (user?.mobile?.length < 5)
      setUser({
        ...user,
        mobile: [...user.mobile, { key: maxKey + 1, value: "" }],
      });
  };
  const handleSubmit = () => {
    console.log("User: ", user);
  };

  const removeMobile = (index) => {
    const arr = [...user.mobile];
    arr.splice(index, 1);
    setUser({ ...user, mobile: arr });
  };
  return (
    <>
      <Container>
        <h3>Dynamic Fields</h3>
        <Card sx={{ m: "auto", maxWidth: 500, p: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                name="name"
                label="Name"
                onChange={handleChange}
              />
            </Grid>

            {Array.isArray(user?.mobile) &&
              user?.mobile?.map(({ key, value }, i) => (
                <Grid item xs={12} key={key}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <TextField
                      sx={{ flex: "1 1 auto", mr: 1 }}
                      // fullWidth
                      variant="outlined"
                      name={key}
                      label="Mobile"
                      onChange={handleMobileChange}
                    />

                    {i == user?.mobile?.length - 1 && (
                      <Button
                        disabled={user?.mobile?.length >= 5 ? true : false}
                        variant="contained"
                        onClick={addMobile}
                      >
                        +
                      </Button>
                    )}

                    {i > 0 && (
                      <Button
                        // disabled={user?.mobile?.length >= 5 ? true : false}
                        variant="contained"
                        onClick={() => removeMobile(i)}
                        color="error"
                      >
                        X
                      </Button>
                    )}
                  </Box>
                </Grid>
              ))}

            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                name="city"
                label="City"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" onClick={handleSubmit}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  );
};

export default DynamicField;
