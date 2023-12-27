import React from "react";
// import FormikDemo from "../formik-demo/FormikDemo";
// import FormikValidation from "../formik-demo/FormikValidation";
// import ControlledComp from "./ContolledComp";
import DynamicField from "./DynamicField";
import SimpleForm from "./SimpleForm";
// import MUIForm from "./MUIForm";
import SimpleFormValidation from "./SimpleFormValidation";

// import SimpleForm from "./SimpleForm";

const FormDemo = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ color: "orange" }}>Form Demo</h1>
      <SimpleForm />
      {/* <MUIForm /> */}
      {/* <ControlledComp /> */}
      {/* <SimpleFormValidation /> */}
      {/* <DynamicField /> */}
      {/* <FormikDemo /> */}
      {/* <SimpleForm /> */}
      {/* <FormikValidation /> */}
    </div>
  );
};

export default FormDemo;
