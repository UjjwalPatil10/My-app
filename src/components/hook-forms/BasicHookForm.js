import React from "react";
import { useForm } from "react-hook-form";
const BasicHookForm = () => {
  const { register, handleSubmit } = useForm();
  return (
    <>
      <h3>Basic Hook Form</h3>
      <form onSubmit={handleSubmit(console.log)}>
        <label>Name</label>
        <input type="text" {...register("name")} />
        <br />
        <label>Mobile</label>
        <input type="tel" {...register("mobile")} />
        <br />
        <label>Email</label>
        <input type="email" {...register("email")} />
        <br />
        <label>Password</label>
        <input type="password" {...register("password")} />
        <br />
        <input type="submit" value="Register" />
      </form>
    </>
  );
};

export default BasicHookForm;
