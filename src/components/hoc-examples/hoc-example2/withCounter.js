// HOC: simply a function which takes another component as an argument and returns a new component
// below HOC add additional data or functionality to originalComponent and returns
// NewComponent with enhanced/updated properties
// const NewComponent = HOC(originalComponent)
// const EnhancedComponent = HOC(originalComponent)
// eg:
// const IronMan = withSuit(TonyStark) //here withSuit i.e HOC gives his functionality/properties to
// TonyStark i.e originalComponent and return IronMan(NewComponent) with enhanced/extra properties

// ============================
import React, { useState } from "react";

const UpdatedComponent = (OringinalComponent) => {
  const NewComponent = () => {
    const [count, setCount] = useState(0);
    const increment = (value = 1) => {
      setCount(value + count);
    };

    const decrement = (value = 1) => {
      if (count > 0) setCount(count - value);
    };
    const city = "Dhule";
    return (
      <OringinalComponent
        city={city}
        count={count}
        increment={increment}
        decrement={decrement}
      />
    );
  };
  return NewComponent;
};

export default UpdatedComponent;
