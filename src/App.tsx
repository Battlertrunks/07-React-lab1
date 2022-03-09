import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import AdDesigner from "./components/AdDesigner";
import Votes from "./components/Votes";
import Ad from "./components/Ad";

function App() {
  return (
    <div className="App">
      <Header user="Chirpus" />
      <div className="AdContainer">
        <Ad flavor="Chocolate" fontSize={32} darkMode={true} />
        <Ad flavor="Vanilla" fontSize={32} darkMode={false} />
        <Ad flavor="Strawberry" fontSize={32} darkMode={true} />
      </div>
      <main>
        <AdDesigner />
        <Votes />
      </main>
    </div>
  );
}

export default App;
