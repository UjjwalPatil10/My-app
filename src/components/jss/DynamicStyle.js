import React, { useState } from "react";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  title: (props) => ({
    backgroundColor: props.primaryColor,
    color: props.textColor,
    padding: "5px 20px",
    margin: 10,
  }),
  box: (props) => ({
    backgroundColor: props.primaryColor,
    color: props.textColor,
    padding: 10,
    fontSize: props.fontSize,
  }),
});

const DynamicStyle = () => {
  const [color, setColor] = useState("blue");
  const [fontSize, setFontSize] = useState(16);
  const classes = useStyles({
    primaryColor: color,
    textColor: "#fff",
    fontSize: fontSize,
  });
  return (
    <>
      <input type="color" onChange={(e) => setColor(e.target.value)} />
      <hr />
      <input
        type="range"
        onChange={(e) => setFontSize(parseInt(e.target.value))}
      />
      <h3 className={classes.title}>Dynamic Style</h3>
      <div className={classes.box}>{"Topper Skills Pune".repeat(50)}</div>
      <h4 className={classes.title}>Sample Title</h4>
    </>
  );
};

export default DynamicStyle;
