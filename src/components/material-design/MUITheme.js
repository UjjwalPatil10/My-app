import React from "react";
import Box from "@mui/material/Box";

const MUITheme = () => {
  return (
    <>
      <h2>MUI Theme</h2>
      <Box
        component="h1"
        sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
      >
        Sample Box Content
      </Box>
      <Box
        component="h1"
        sx={{
          backgroundColor: "secondary.main",
          color: "secondary.contrastText",
        }}
      >
        Sample Box Content
      </Box>
    </>
  );
};

export default MUITheme;
