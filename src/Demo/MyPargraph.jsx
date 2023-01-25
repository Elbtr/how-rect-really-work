import React from "react";

const MyParagraph = (porps) => {
  console.log("My-paragraph_");
  return <p>{porps.children}</p>;
};

export default MyParagraph;
