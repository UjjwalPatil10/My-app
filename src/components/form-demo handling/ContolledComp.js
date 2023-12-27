import React, { useState } from "react";
const ControlledComp = () => {
  let [user, setUser] = useState({
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <h3>Controlled Component</h3>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
      />
    </>
  );
};

export default ControlledComp;
