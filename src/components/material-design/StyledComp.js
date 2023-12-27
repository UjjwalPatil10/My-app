import React from "react";
import { styled } from "@mui/material/styles"; //styled is a function

const Title = styled("h3")({
  backgroundColor: "red",
});
// if we want to return object use this ({})and don't want to eturn anything just take {}
const Heading = styled("h1")(({ theme }) => ({
  // we pass callback function
  padding: 3,

  paddingLeft: 20,
  backgroundColor: theme.palette.primary.light,
  borderLeft: `15px solid ${theme.palette.primary.dark}`,
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
  },
  "& span": {
    color: "red",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));
const StyledComp = () => {
  return (
    <>
      <h3>Styled components</h3>
      <Title>Title styled components</Title>
      <Title>Title styled components</Title>
      <Heading>
        Heading styled components
        <span> sample span </span>
      </Heading>
    </>
  );
};

export default StyledComp;
