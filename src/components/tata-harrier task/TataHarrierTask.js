import React, { useState } from "react";

const images = [
  "https://cars.tatamotors.com/images/harrier/color/starlight-harrier-color-d-banner.jpg",
  "https://cars.tatamotors.com/images/harrier/color/harrier-grassland-desktop.jpg",
  "https://cars.tatamotors.com/images/harrier/color/oberon-black-d-color-banner.jpg",
  "https://cars.tatamotors.com/images/harrier/color/royale-blue-harrier-desktop.jpg",
  "https://cars.tatamotors.com/images/harrier/color/harrier-tropical-mist-desktop.jpg",
  "https://cars.tatamotors.com/images/harrier/color/Calypso-Red.jpg",
  "https://cars.tatamotors.com/images/harrier/color/Orcus-White.jpg",
  "https://cars.tatamotors.com/images/harrier/color/Daytona-Grey.jpg",
];

// .item {
//   flex-grow: 1;
//   flex-shrink: 1;
//   flex-basis: auto;
// }
// .item img {
//   width: 100%;
//   cursor: pointer;
// }

const TataHarrierTask = () => {
  const [image, setImage] = useState(
    "https://cars.tatamotors.com/images/harrier/color/Calypso-Red.jpg"
  );

  return (
    <section>
      <div style={{ height: "75vh", width: "100vw" }}>
        <img src={image} alt="" style={{ width: "100%", height: "100%" }} />
      </div>
      <section style={{ height: "20vh", width: "100vw", display: "flex" }}>
        {Array.isArray(images) &&
          images?.map((src, i) => (
            <div style={{ flex: "1 1 auto", cursor: "pointer" }}>
              <img
                key={i}
                onClick={() => setImage(src)}
                src={src}
                alt=""
                style={{ width: "100%", cursor: "pointer" }}
              />
            </div>
          ))}
      </section>
    </section>
  );
};

export default TataHarrierTask;

// import React, { useState } from "react";

// const images = [
//   "https://cars.tatamotors.com/images/harrier/color/starlight-harrier-color-d-banner.jpg",
//   "https://cars.tatamotors.com/images/harrier/color/harrier-grassland-desktop.jpg",
//   "https://cars.tatamotors.com/images/harrier/color/oberon-black-d-color-banner.jpg",
//   "https://cars.tatamotors.com/images/harrier/color/royale-blue-harrier-desktop.jpg",
//   "https://cars.tatamotors.com/images/harrier/color/harrier-tropical-mist-desktop.jpg",
//   "https://cars.tatamotors.com/images/harrier/color/Calypso-Red.jpg",
//   "https://cars.tatamotors.com/images/harrier/color/Orcus-White.jpg",
//   "https://cars.tatamotors.com/images/harrier/color/Daytona-Grey.jpg",
// ];

// // .item {
// //   flex-grow: 1;
// //   flex-shrink: 1;
// //   flex-basis: auto;
// // }
// // .item img {
// //   width: 100%;
// //   cursor: pointer;
// // }

// const TataHarrierTask = () => {
//   const [image, setImage] = useState(
//     "https://cars.tatamotors.com/images/harrier/color/starlight-harrier-color-d-banner.jpg"
//   );

//   return (
//     <section>
//       <div style={{ height: `calc(100vh - 100px)` }}>
//         <img src={image} alt="" style={{ width: "100%", height: "100%" }} />
//       </div>
//       <div style={{ display: "flex", height: 100, maxWidth: "100vw" }}>
//         {Array.isArray(images) &&
//           images?.map((src, i) => (
//             <div
//               style={{ flex: "1 1 auto", cursor: "pointer" }}
//               key={i}
//               onClick={() => setImage(src)}
//             >
//               <img src={src} alt="" />
//             </div>
//           ))}
//       </div>
//     </section>
//   );
// };

// export default TataHarrierTask;
