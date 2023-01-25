import React from "react";

import MyParagraph from "./MyPargraph";

const Demo = (porps) => {
  console.log("DEMO_RUNNING");
  return <MyParagraph>{porps.onShow ? "this new Paragraph" : ""}</MyParagraph>;
};

export default React.memo(Demo);
// React.memo() melihat tidak ada props yang berubah maka reactDom tidak merender Demo dan child nya
