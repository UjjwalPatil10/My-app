import React from "react";

const OlxComponents = (props) => {
  return (
    <>
      <div className="Content" style={{ display: "flex" }}>
        <div
          className="items"
          style={{ border: "1px solid #0e040533", borderRadius: 7, margin: 10 }}
        >
          <figure className="text-center" style={{ width: 200 }}>
            {props.image}
          </figure>

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
    </>
  );
};

export default OlxComponents;
