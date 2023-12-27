import React from "react";
import A from "./A";
import CountryContext from "./CountryContext";

const ContextDemo = () => {
  // context is used if we want to give props to nested child i.e child of child in that case
  //props is used when you want to give values to direct(immediate) child

  const city = "pune";
  const country = "India";
  return (
    //   hook use only  in function component not in class component
    <>
      <h2>Context Demo</h2>
      {/* <A city={city} /> */}
      <CountryContext.Provider value="japan">
        <A city={city} />
      </CountryContext.Provider>
    </>
  );
};

export default ContextDemo;
