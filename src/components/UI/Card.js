import React from "react";
// When we use modules, we must import sth from module, not just a file itself like it happens with normal CSS file
import classes from "./Card.module.css";
// We use {xx} as it is not JSX code, it is JS expression that should be evaluated inside JSX code. Props.children will give us a content which is passed between the opening and closing Card content.

// We are imprting here two styles - one from Card.module.css - 'internal', let's say and the another one via props. Thanks to that we passed as well aditional classes from another component

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
