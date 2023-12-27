import React from "react";
import BasicHookForm from "./BasicHookForm";
import HFDynamic from "./HFDynamic";
import HFSchemaValidation from "./HFSchemaValidation";
import HFValidation from "./HFValidation";
import MatrimonialDynamicForm from "./MatrimonialDynamicForm";

const HookFormDemo = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h3>Hook Form Demo</h3>
      {/* <MatrimonialDynamicForm /> */}
      <BasicHookForm />
      {/* <HFValidation /> */}
      {/* <HFSchemaValidation /> */}
      {/* <HFDynamic /> */}
    </div>
  );
};

export default HookFormDemo;
