import React, { useContext } from "react";
import CountryContext from "./CountryContext";

const D = ({ city }) => {
  const country = useContext(CountryContext); //To usecontext we pass our create context i.e (CountryContext) useContext give value that we pass to CountryContext i.e value="japan"
  return (
    <>
      <h2>
        D Component,City={city}, country={country}
      </h2>
    </>
  );
};

export default D;
