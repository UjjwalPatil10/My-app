import React, { useState } from "react";
// import AcceseriesMenu from "./AcceseriesMenu";
import AcceseriesMenu from "./AcceseriesMenu";
const DevicesGallery = () => {
  const [items, setItems] = useState(AcceseriesMenu);
  const filterItem = (categItem) => {
    const updatedItems = AcceseriesMenu.filter((curEle, ind, arr) => {
      return curEle.category == categItem; //if match we get complete data of breakfast {object}
    });
    setItems(updatedItems); //here setItems value(updated value) will be the current items value
  };

  return (
    <>
      <h1 className="mt-5 text-center main-heading">ACCESSERIES</h1>
      {/* <h1 className="mt-5 text-center main-heading"> Car and Bike Details</h1> */}
      <hr />
      <div className="menu-tabs container ">
        <div className="menu-tab d-flex justify-content-around ">
          <button
            className="btn btn-warning"
            onClick={() => filterItem("Laptop")} // in {} we make function call because js only work in object i.e why we take like this {() => filterItem("breakfast")}
          >
            Laptop
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("Mobile")}
          >
            Mobile
          </button>
          {/* <button
            className="btn btn-warning"
            onClick={() => filterItem("Evening")}
          >
            Evening
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("Dinner")}
          >
            Dinner
          </button> */}
          <button
            className="btn btn-warning"
            onClick={() => setItems(AcceseriesMenu)}
          >
            All
          </button>
        </div>
      </div>

      {/* my main items section  */}
      <section className="menu-items container-fluid ">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {items.map((elem) => {
                //below we do object destructuring
                const { id, name, image, category, Price, Model } = elem;
                return (
                  <div className="item1 col-12 col-md-6 col-sm-6 col-lg-4 my-4 d-flex m-auto">
                    <div
                      className="row Item-inside d-flex m-auto"
                      style={{ border: "1px solid #ddd" }}
                    >
                      {/* for images  */}
                      <div className="col-12 col-sm-12 col-md- col-lg-4 img-div">
                        <img src={image} alt="menupic" className="img-fluid" />
                      </div>
                      {/* menu items description  */}
                      <div className="col-12 col-md-12 col-lg-8">
                        <div className="main-title pt-4 pb-3">
                          <h1>{name}</h1>
                          <p>{Model} </p>
                        </div>
                        <div className="menu-price-book">
                          <div className="price-book-divide">
                            <h2>{Price}</h2>
                            <a href="#">
                              <button className="btn btn-primary">
                                Order Now
                              </button>
                            </a>
                          </div>
                          <p>Prices may vary on selected date</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default DevicesGallery;
