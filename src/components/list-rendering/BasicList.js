import React, { Component } from "react";
var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
class BasicList extends Component {
  render() {
    return (
      <div>
        <h3>Basic List</h3>
        <ul>
          {Array.isArray(arr) &&
            arr?.map((n, i) => <li key={n + "-" + i}>{n}</li>)}
          {/* Each child in a list should have a unique "key" prop  */}
          {/* no more changes i.e changes,any updation in that case we use index as a key  */}
          {/* if we want to delete,update do any operation in that case cannot use index as a key we get a problem */}
          {/* if in array number is same then Encountered with the same "key" problem ocuured */}
          {/* key is used because in array some elements(numbers) repeated so to recognize them on the basis of key we take key in <li></li> opening tag  */}
          {/* //Js is dynamic language and it access in object for that every
          dynamic activity we need to take in object {} */}
        </ul>
      </div>
    );
  }
}
export default BasicList;

// For Practice
// import React, { Component } from "react";
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// class BasicList extends Component {
//   render() {
//     return (
//       <div>
//         <h3>Basic List</h3>
//         <ul>
//           {Array.isArray(arr) &&
//             arr?.map(
//               (
//                 num,
//                 i,
//                 arr //? is optional chaining(self navigation)
//               ) => <li>{num}</li>
//             )}
//         </ul>
//       </div>
//     );
//   }
// }
// export default BasicList;
