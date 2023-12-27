import React from "react";
const PropsInFun = ({ name, age, city, isActive }) => {
  // const {name,age,city,isActive} = this.props
  return (
    <div>
      <h3>
        Props in Func, Name:{name},Age:{age},City:{city},isActive:
        {isActive ? "Yes" : "No"}
      </h3>
    </div>
  );
};

export default PropsInFun;

// import React from "react";
// const PropsInFun = (props) => {
//   // const { name, age, city, isActive } = props; //we do object destructuring
//   return (
//     <>
//       <h3>
//         Props In Func, Name:{props.name}, Age:{props.age}, City:{props.city},
//         isActive{props.isActive ? " : Yes" : " : No"}
//       </h3>
//     </>
//   );
// };

// export default PropsInFun;
