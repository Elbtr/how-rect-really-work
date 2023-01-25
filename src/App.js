import React, { useState, useCallback } from "react";

import Button from "./components/UI/Button/Button";

import "./App.css";
import Demo from "./Demo/Demo";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  // setiap kali react di render react akan mengecek ulang semua component juga akan mengecek ulang childnya
  console.log("APP_RUNNING");

  const toggleParagrapHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* <Demo onShow={showParagraph} /> */}
      {/* catatan= yang gak dijalan kan cuman props onShow nya karna kondisi nya false tidak terhubung ke state bagian kondisi awal jadi tidak ada aksi yang dilakukan */}
      <Demo onShow={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={toggleParagrapHandler}>toggle Paragraph</Button>
    </div>
  );
}

export default App;
