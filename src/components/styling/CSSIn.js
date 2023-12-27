import React from "react";
// import Styling from "./Styling";
const CSSInJs = () => {
  const title = {
    padding: "5px 10px",
    margin: 10,
    backgroundColor: "red",
    border: "1px solid #000",
  };
  // const DoStyle = {
  //   padding: "5px 10px",
  //   margin: 10,
  //   backgroundColor: "red",
  //   border: "1px solid #000",
  // };

  return (
    <>
      <h3 className="title">CSS conflict</h3>
      <h3 style={title}>CSS in Javascript</h3>
      <h3 style={title}>JSS Styling</h3>
      <h3
        style={{
          padding: "5px 10px",
          margin: 10,
          backgroundColor: "blue",
          border: "1px solid #000",
          color: "white",
        }}
      >
        Like Inline CSS
      </h3>
    </>
  );
};

export default CSSInJs;

// CSS styling in JS
// .title{
//     padding: 2px 5px;
//     margin:10px;
//     background-color:red;
//     border:1px solid #000;
// }

// JSS Styling in JS

// const title = {
//   padding: "2px 5px",
//   margin: 10,
//   backgroundColor: "red",
//   border: "1px solid #000",
// };
