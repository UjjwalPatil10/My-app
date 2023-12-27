import React, { useEffect, useState } from "react";

const Child = () => {
  const [count, setCount] = useState(0);
  //works like componentDidMount(){}//it mount only once in his life cycle
  //componentDidMount(){} will start executing from 2nd time first it is mounted(render) after that executes
  useEffect(() => {
    console.log(
      "this callback gets executed just after the components is mounted..."
    );
  }, []);

  //similar to componentDidUpdate(){}
  //componentDidUpdate(){} it is executed at first time update for each rendering
  useEffect(() => {
    console.log("Executes once for each rendering...");
  }, [count]); //executes when there are changes in [count]

  //similar to componentWilUnmount(){}
  useEffect(() => {
    return () => {
      console.log("Executes just before unmounting the compponent..");
    };
  });

  return (
    <>
      <h3>Child component,Count:{count}</h3>
      <button onClick={() => setCount(count + 1)}>++</button>
      <button onClick={() => setCount(count - 1)}>--</button>
    </>
  );
};

export default Child;
