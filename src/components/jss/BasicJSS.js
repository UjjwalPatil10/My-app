import React from "react";
import { createUseStyles } from "react-jss"; //createUseStyles is a method when we call this method it returns a Hooks
const useStyles = createUseStyles({
  // we write JSS code in {} so here we pass {} to createUseStyles function createUseStyles({})like this and inside that we do style
  // className: {
  //   propertyName: "value",
  // },
  title: {
    backgroundColor: "palegreen",
    borderLeft: "10px solid #0f0",
    padding: "5px 20px",
    "&:hover": {
      //just like we use in sass for nesting like "&:hover":{} we use here
      backgroundColor: "cyan",
    },
  },
  box: {
    backgroundColor: "red",
    height: 200,
    "& p": {
      backgroundColor: "palegreen",
    },
  },
}); //Hook name start with use

const BasicJSS = () => {
  const classes = useStyles();
  //    {
  //        className:{},
  //        title:{}
  //    }
  return (
    <>
      <h2 className={classes.title}>JSS</h2>
      <div className={classes.box}>
        <span>Sample span</span>
        <p>{"Sample para".repeat(50)}</p>
        <span>Sample span</span>
      </div>
    </>
  );
};

export default BasicJSS;

// FOR practice
// import React, { useState } from "react";
// import { createUseStyles } from "react-jss";
// const BasicJSS = createUseStyles({
//   className: {
//     propertyName: "value",
//   },

//   title: {
//     backgroundColor: "palegreen",
//     borderLeft: "10px solid #0f0",
//     padding: "5px 20px",
//     "&:hover": {
//       // we used nesting
//       backgroundColor: "cyan",
//     },
//   },
//   box: {
//     backgroundColor: "red",
//     height: 200,
//     "& p": {
//       backgroundColor: "palegreen",
//     },
//   },
// });

// const BasicJSS = () => {
//   const classes = useState();
//   // {
//   //     className:{},
//   //     title:{}
//   // }
//   return (
//     <>
//       <h2 className={classes.title}>JSS</h2>
//       <div className={classes.box}>
//         <span>sample span</span>
//         <p>{"sample para ".repeat(50)}</p>
//         <span>sample span</span>
//       </div>
//     </>
//   );
// };

// export default BasicJSS;
