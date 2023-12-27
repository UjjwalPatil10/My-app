import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// default import
import Button from "@mui/material/Button";
// named import
// import { Button } from "@mui/material";
import MUITheme from "./MUITheme";
import StyledComp from "./StyledComp";
import MUIComps from "./MUIComps";
import DataGridTable from "./DataGridTable";
import MUIDatatableDemo from "./MUIDatatable";

const myTheme = createTheme({
  palette: {
    primary: {
      main: "#fcba03",
      light: "#faca43",
      dark: "#bf8e04",
      contrastText: "#000",
    },
  },
});
const MaterialDesign = () => {
  return (
    <>
      <h2>Material Design</h2>
      {/* below variant is like type in Mui and contained is like text */}
      <Button variant="contained">Click me</Button>
      {/* <MUILayout /> */}
      <ThemeProvider theme={myTheme}>
        <MUITheme />
      </ThemeProvider>
      {/* <StyledComp /> */}
      {/* <MUIComps /> */}
      {/* <DataGridTable /> */}
      {/* <MUIDatatableDemo /> */}
    </>
  );
};

export default MaterialDesign;

// material ui support to android ios,mobile application ,flutter,dart etc it is google application
//backdrop it is work like placeholder
