import { useState } from "react";
import Ad from "./Ad";
import "./AdDesigner.css";

const AdDesigner = () => {
  const [flavor, setFlavor] = useState("Strawberry");
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(24);

  const decreaseFontSize = () => {
    setFontSize((prev) => prev - 1);
  };

  const increaseFontSize = () => {
    setFontSize((prev) => prev + 1);
  };

  return (
    <section className="AdDesigner">
      <h2>Ad Designer</h2>
      <Ad flavor={flavor} fontSize={fontSize} darkMode={darkMode} />
      <h3>What to support</h3>
      <div>
        <button
          onClick={() => setFlavor("Chocolate")}
          disabled={flavor === "Chocolate"}
        >
          Choclate
        </button>
        <button
          onClick={() => setFlavor("Vanilla")}
          disabled={flavor === "Vanilla"}
        >
          Vanilla
        </button>
        <button
          onClick={() => setFlavor("Strawberry")}
          disabled={flavor === "Strawberry"}
        >
          Stawberry
        </button>
      </div>
      <h3>Color Theme</h3>
      <div>
        <button onClick={() => setDarkMode(false)} disabled={!darkMode}>
          Light
        </button>
        <button onClick={() => setDarkMode(true)} disabled={darkMode}>
          Dark
        </button>
      </div>
      <h3>Font Size</h3>
      <div>
        <button onClick={decreaseFontSize}>Down</button>
        <p>{fontSize}</p>
        <button onClick={increaseFontSize}>Up</button>
      </div>
    </section>
  );
};

export default AdDesigner;
