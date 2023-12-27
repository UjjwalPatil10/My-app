// import "./NetflixCss.css";
// //normal css will conflict so we use .module.css

// const { Button } = require("bootstrap");

// // import Style from "./NetflixModule.module.css";
// // const Component = () => {
// //   return <h3>I am a Component</h3>;
// // };
// const Card = (hello) => {
//   const CardName = "john";
//   console.log(hello);
//   return (
//     <div class="netflix">
//       Card
//       <h4>Name - {hello.name}</h4>
//       <h4>Age - {hello.age}</h4>
//     </div>
//   );
// };
// const Netflix = () => {
//   return (
//     <div>
//       <h1>Here is an example of component.</h1>
//       <Card name="John" age={25} />
//       <Card name="Monteal" age={26} />
//       <Card name="Joe" age={28} />
//     </div>
//   );
// };

// export default Netflix;
const Netflix = () => {
  const data = [
    {
      name: "Ujjwal",
      age: 25,
      hobby: "Learn coding",
      education: "B.E Mechanical",
    },
    {
      name: "Vishal",
      age: 25,
      hobby: "Learn coding",
      education: "B.E Mechanical",
    },
    {
      name: "Sahil",
      age: 25,
      hobby: "Learn coding",
      education: "B.E Mechanical",
    },
  ];
  console.table(data);
};

export default Netflix;
