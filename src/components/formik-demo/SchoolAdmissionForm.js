import React, { useState } from "react";

const SchoolAdmissionForm = () => {
  const [user, setUser] = useState({});
  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User: ", user);
  };

  return (
    <>
      <h4>School Admission Form</h4>
      <section    style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}>
        <form>
          <label>Name</label>
          <input type="text" name="name" onChange={handleChange} />
          <p>First Name</p>

          <input type="text" name="name" onChange={handleChange} />
          <p>Family Name</p>

          <label>Date of Birth</label>
          <input type="month" name="month" onChange={handleChange} />
          <p>Month</p>

          <input type="day" name="day" onChange={handleChange} />
          <p>Day</p>

          <input type="year" name="year" onChange={handleChange} />
          <p>Year</p>

          <h5>Gender</h5>
          <label>Male</label>
          <input type="radio" />

          <label>Female</label>
          <input type="radio" />

          <h5>Country</h5>

          <select>
            <option>Please Select</option>
            <option>India</option>
            <option>Japan</option>
            <option>USA</option>
            <option>Russia</option>
            <option>Nepal</option>
          </select>

          <h5>International Address</h5>

          <input type="text" name="address" onChange={handleChange} />
          <p>Street Address</p>
        </form>
      </section>
    </>
  );
};

export default SchoolAdmissionForm;
