import React, { createRef, forwardRef, useRef } from "react";

const FuncComp = (props, ref) => {
  const inputRef1 = createRef(); //recommended method
  const inputRef2 = useRef(null); //it is in fun comp and we have to give initial value to useRef(null)

  const handleFocus1 = () => {
    inputRef1.current.focus(); // .current i.e we access real dom node
  };

  const handleFocus2 = () => {
    inputRef2.current.focus();
  };
  return (
    <>
      <h2 ref={ref}>Function Component</h2>
      {/* below we attached ref={inputRef1} because in dom we direct access dom and apply method on it but here we create createRef so for that we attached it after that any method apply on that input dom node  */}
      {/* ref={inputRef1} is to access dom node  */}
      <input type="text" ref={inputRef1} />

      <button onClick={handleFocus1}>Focus</button>
      <br />

      <input type="text" ref={inputRef2} />
      <button onClick={handleFocus2}>Focus</button>
    </>
  );
};

export default forwardRef(FuncComp);
