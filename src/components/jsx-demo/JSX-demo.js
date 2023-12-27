// import React from "react";

// const JSXDemo = () => {
//   //return React.createElement("div",null,"sample content"); // in null we can give attributes for that we have to give property in object {{}}
//   return React.createElement(
//     "div",
//     null,
//     React.createElement(
//       "h1",
//       { title: "Javascript training" },
//       "Topper Skills"
//     ),
//     React.createElement(
//       "p",
//       { style: { color: "red" } },
//       "pune,india",
//       React.createElement("a", { href: "#" }, "Read more...")
//     )

//     // <div>
//     //   <h3>JSX Demo</h3>
//     // </div>
//   );
// };

// // React.createElement("div",null,"sample content"); // in null we can give attributes for that we have to give property in object {{}}
// // document.createElement("div",null,"content any that we add");
// export default JSXDemo;

// // JSX (JavaScript and XML):-
// //     It is a syntax used to create the DOM nodes/react element in the reactjs application.

// //     JSX helps developer to write the Reactjs application code in simple way

// //     JSX is internally converted to call to React.createElement() method by the Babel.

// //     JSX is very similar to HTML with few differences

// //     Example:-

// // Reactjs code

// const div = React.createElement(
//   "div",
//   null,
//   React.createElement("h1", { title: "Javascript training" }, "Topper Skills"),
//   React.createElement(
//     "p",
//     { style: { color: "red" } },
//     "Pune, India",
//     React.createElement("a", { href: "#" }, "Read more...")
//   )
// );

// JSX code

// const div = (
//   <div>
//     <h1 title="Javascript training">Topper Skills</h1>
//     <p style={{ color: "red" }}>
//       Pune, India
//       <a href="#">Read More...</a>
//     </p>
//   </div>
// );
