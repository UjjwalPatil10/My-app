import { useState } from "react";
function withCounter(WrappedComponent) {
  return () => {
    //WrapperComponent(NewComponent)
    const [count, setCount] = useState(0);
    const increment = (value = 1) => {
      setCount(value + count);
    };

    const decrement = (value = 1) => {
      if (count > 0) setCount(count - value);
    };

    return (
      <WrappedComponent
        count={count}
        increment={increment}
        decrement={decrement}
      />
    );
  }; //WrapperComponent(NewComponent) return
}
export default withCounter;
