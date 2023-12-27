import React from "react";
const TailwindDemo = () => {
  return (
    <>
      <h2>Tailwind demo</h2>
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <p className="text-3xl text-gray-700 font-bold mb-5 text-info">
          Welcome!
        </p>
        <p className="text-gray-500 text-lg text-primary">
          React and Tailwind CSS in action
        </p>
      </div>
    </>
  );
};

export default TailwindDemo;
