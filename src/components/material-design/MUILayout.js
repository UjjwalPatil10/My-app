// container :
// Grid Container
// Grid item
// bootstrap not includes xs
// but in Mui includes  xs

// import React from 'react'
// import Container from "@mui/material/Container"
// import Grid from "@mui/material/Grid"
// import Box from "@mui/material/Box"
// import { GREATEST_LOWER_BOUND } from '@jridgewell/trace-mapping'
// const MUILayout = () => {
//     return (
//         <>
//         <h3>Material Layout</h3>
//         <Container>
//             <Box bgcolor = "palegreen">{"sample content".repeat(50)}</Box>
//         </Container>

//         <Container maxWidth="md">
//             <Box bgcolor = "red">{"sample content".repeat(50)}</Box>
//         </Container>

//         <Container>
//             <Grid container>

//             </Grid>
//         </Container>
//         </>
//       );

// }

// export default MUILayout;

import React from "react";
import Container from "@mui/material/Container"; //in mui layout we use container
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
const MUILayout = () => {
  return (
    <>
      <h3>Material Layout</h3>
      <Container>
        <Box bgcolor="palegreen">{"sample content ".repeat(50)}</Box>
      </Container>
      {/* maxWidth = "md" is like container-lg we use in bootstrap  */}
      <Container maxWidth="md">
        <Box bgcolor="red">{"sample content ".repeat(50)}</Box>
      </Container>

      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box bgcolor="palegreen">{"sample content ".repeat(10)}</Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box bgcolor="cyan">{"sample content ".repeat(10)}</Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box bgcolor="palegreen">{"sample content ".repeat(10)}</Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box bgcolor="cyan">{"sample content ".repeat(10)}</Box>
          </Grid>
        </Grid>
      </Container>
      <Box>sample section</Box>
    </>
  );
};

export default MUILayout;

// Container

// Grid container
