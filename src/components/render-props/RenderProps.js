import React from "react";
import Counter from "./Counter";
import TotalDogs from "./TotalDogs";
import TotalHorses from "./TotalHorses";

const RenderProps = () => {
  // RenderProps:it is used to reuse same logic in multile components .it is better option over HOC(higher order component) because
  // with HOC you need to modify your component.
  // In RenderProps you have simply pass a function to the reusable component to access the logic.
  // we can pass the function as 'render' props or as 'childern'

  return (
    <>
      <h2>Render Props</h2>
      <hr />
      {/* <TotalHorses/>
    <hr/>
    <TotalDogs/>
       */}

      <Counter
          //here we pass func as render props
        render={(count, inc, dec) => { 
          return <TotalHorses total={count} inc={inc} dec={dec} />;
        }}
      />

      <hr />
      {/* below we pass func as children*/}
      {/* if we take function body curly {} then return statement is mandatory */}
      <Counter>
        {(c, i, d) => <TotalDogs count={c} increment={i} decrement={d} />}
      </Counter>
    </>
  );
};

export default RenderProps;
