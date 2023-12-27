import { Component } from "react";
// import Image from "./Image";

// const menus = [
//   {
//       id: 1,
//       name: "Samosa",

//       image: "images/bulb-off.png",
//       category: "breakfast",
//       price: "12Rs",
//       description: "lorem"
//   }
// ]

class OlxComponent extends Component {
  render(props) {
    console.log(props);
    return (
      <div className="Content" style={{ display: "flex" }}>
        <div
          className="items"
          style={{ border: "1px solid #0e040533", borderRadius: 7, margin: 10 }}
        >
          <figure className="text-center" style={{ width: 200 }}></figure>

          <div
            className="spanitems"
            style={{
              borderLeft: "6px solid yellow",
              // height: 102,
              padding: "0 16px",
            }}
          >
            <h2 style={{ height: 15 }}>₹ 15,35,960</h2>
            {props.range}
            <p style={{ fontSize: 17, lineHeight: 0.7 }}>{props.title}</p>
            <div
              className="span"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span style={{ position: "relative", bottom: 4 }}>
                {props.description}
              </span>
              <span style={{ position: "relative", bottom: 4 }}>
                {props.date}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default OlxComponent;


// class Avatar extends Component{
//   render(props){

//     console.log(props);
//     return(
//       <img
//       className="avatar"
//       src="https://i.imgur.com/1bX5QH6.jpg"
//       alt="Lin Lanying"
//       width={100}
//       height={100}
//     />
//     )
//   }
// }
// export default class profile extends Component{
//   render(){
//     return(
//       <Avatar/>
//     )
//   }
// }



// =============================================

// function Avatar() {
//   return (
//     <img
//       className="avatar"
//       src="https://i.imgur.com/1bX5QH6.jpg"
//       alt="Lin Lanying"
//       width={100}
//       height={100}
//     />
//   );
// }

// export default function Profile() {
//   return (
//     <Avatar />
//   );
// }