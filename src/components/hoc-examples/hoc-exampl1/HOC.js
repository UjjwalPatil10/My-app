import React from "react";

const HOC = (Component) => {
  const samplObject = {
    name: "chiku",
    age: "4",
    city: "pune",
  };

  return () => <Component value={samplObject} />;
};

export default HOC;
