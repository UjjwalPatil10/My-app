// import { Component } from "react";
// //React UI file/Module

// class UserProfile extends Component {
//   render() {
//     const { name, gender, mobile, email, age, address, avatar, id } =
//       this.props; //here we do array destructuring
//     return (
//       <div
//         style={{
//           width: 250,
//           padding: 5,
//           margin: 5,
//           border: "1px solid #8889",
//           boxShadow: "0 0 3px 1px #999",
//         }}
//       >
//         <img
//           style={{ width: "100%", height: 200 }}
//           src={avatar}
//           alt={name?.first} //alt={name} here name is object in react we cannot use object as a react child element because in object there is a property of different datatypes. we can use array as react child element because it has one datatype with sequence
//         />
//         <h4>
//           {id}-{name?.first} {name?.last}
//         </h4>

//         <p>Age:{age}</p>
//         <p>Gender:{gender}</p>
//         <p>Mobile:{mobile}</p>
//         <p>Email:{email}</p>
//         <p>
//           Address:{address?.city},{address?.state},{address?.country}
//         </p>
//       </div>
//     );
//   }
// }
// export default UserProfile;
