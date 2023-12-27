import React from "react";
import CountryContext from "./CountryContext";
import D from "./D";

const C = ({ city }) => {
  return (
    <>
      {/* <h2>C component</h2> */}
      {/* we have class component so in that case we cannot use hook so below is a alternative way to access country value */}
      <CountryContext.Consumer>
        {/* we give callback inside object {} */}
        {(country) => <h2>C component,country:{country}</h2>}
      </CountryContext.Consumer>
      <D city={city} />
    </>
  );
};

export default C;
