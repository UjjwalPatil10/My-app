import React from "react";
import "./TataHarrier.css";
const main = {
  height: "70vh",
  width: "100vw",
};

const TataHarrierCar = () => {
  return (
    <>
      <div className="main" style={main}>
        <img
          style={{ width: "100%", height: "100%" }}
          // className="img-fluid"
          // style={{ width: "100%", height: "100%" }}
          src="https://cars.tatamotors.com/images/harrier/color/harrier-grassland-desktop.jpg"
          alt=""
          id="main-img"
        />
      </div>
      <section
        className="item img"
        style={{ height: "20vh", width: "100vw", display: "flex" }}
      >
        <div
          className="item"
          onclick="setImage('https://cars.tatamotors.com/images/harrier/color/starlight-harrier-color-d-banner.jpg')"
        >
          <img
            src="https://cars.tatamotors.com/images/harrier/color/starlight-harrier-color-d-banner.jpg"
            alt=""
          />
        </div>

        {/* <!-- item --> */}
        <div
          className="item"
          onclick="setImage('https://cars.tatamotors.com/images/harrier/color/harrier-grassland-desktop.jpg')"
        >
          <img
            src="https://cars.tatamotors.com/images/harrier/color/harrier-grassland-desktop.jpg"
            alt=""
          />
        </div>

        {/* <!-- item --> */}
        <div
          className="item"
          onclick="setImage('https://cars.tatamotors.com/images/harrier/color/oberon-black-d-color-banner.jpg')"
        >
          <img
            src="https://cars.tatamotors.com/images/harrier/color/oberon-black-d-color-banner.jpg"
            alt=""
          />
        </div>

        {/* <!-- item --> */}
        <div
          className="item"
          onclick="setImage('https://cars.tatamotors.com/images/harrier/color/royale-blue-harrier-desktop.jpg')"
        >
          <img
            src="https://cars.tatamotors.com/images/harrier/color/royale-blue-harrier-desktop.jpg"
            alt=""
          />
        </div>

        {/* <!-- item --> */}
        <div
          className="item"
          onclick="setImage('https://cars.tatamotors.com/images/harrier/color/harrier-tropical-mist-desktop.jpg')"
        >
          <img
            src="https://cars.tatamotors.com/images/harrier/color/harrier-tropical-mist-desktop.jpg"
            alt=""
          />
        </div>
        {/* <!-- item --> */}
        <div
          className="item"
          onclick="setImage('https://cars.tatamotors.com/images/harrier/color/Calypso-Red.jpg')"
        >
          <img
            src="https://cars.tatamotors.com/images/harrier/color/Calypso-Red.jpg"
            alt=""
          />
        </div>

        {/* <!-- item --> */}
        <div
          className="item"
          onclick="setImage('https://cars.tatamotors.com/images/harrier/color/Orcus-White.jpg')"
        >
          <img
            src="https://cars.tatamotors.com/images/harrier/color/Orcus-White.jpg"
            alt=""
          />
        </div>
        {/* <!-- item --> */}
        <div
          className="item"
          onclick="setImage('https://cars.tatamotors.com/images/harrier/color/Daytona-Grey.jpg')"
        >
          <img
            src="https://cars.tatamotors.com/images/harrier/color/Daytona-Grey.jpg"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default TataHarrierCar;
