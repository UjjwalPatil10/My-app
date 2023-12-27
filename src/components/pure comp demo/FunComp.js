import React, { memo } from "react";

const FunComp = ({ count, address }) => {
  console.log("FunComp");
  return (
    <>
      <h2>
        Function Component-{count},City:{address.city}
      </h2>
    </>
  );
};

export default memo(FunComp, (prevProps, nextProps) => {
  if (prevProps.address.city == nextProps.address.city) {
    return true;
  } else {
    return false;
  }
});
