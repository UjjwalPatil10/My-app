import React from "react";

//Funtion Component EventHandling
const EventHandling = () => {
  const greet = () => {
    alert("Hello Topper Skills");
  };
  const shoWCity = (city) => {
    // we call showCity like this () => shoWCity("Pune") because we give city as parameter
    alert(`I am from ${city}`);
  };
  return (
    <div>
      <h3>EventHandling</h3>
      {/* bellow we internally call the function  */}
      <button onClick={greet}>Greet</button>
      {/* below if we want to pass value in that case we take function to call the function  */}
      <button onClick={() => shoWCity("Pune")}>Pune</button>
      <button onClick={() => shoWCity("Mumbai")}>Mumbai</button>
    </div>
  );
};

export default EventHandling;

// import React, { useState } from "react";
// const EventHandling = () => {
//   const greet = () => {
//     alert("I am greet");
//   };
//   const sunCity = (city) => {
//     alert(`I am from ${city} city `); //here we use backtik ``
//   };
//   const chiku = (city) => {
//     alert(`I am chiku from ${city} city`);
//   };

//   return (
//     <div>
//       <h3>Event Handling</h3>
//       <button onClick={greet}>Greet</button>
//       <button onClick={() => sunCity("Dhule")}>Dhule</button>
//       <button onClick={() => chiku("Dhule")}>chiku</button>
//     </div>
//   );
// };

// export default EventHandling;
