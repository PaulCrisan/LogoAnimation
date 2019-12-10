import React, { useState, useEffect } from "react";
import logo, { ReactComponent as Logo } from "./logo2.svg";
import "./App.css";
import "./styles.scss";

function App() {
  const [animation, setAnimation] = useState("");

  const handleEndAnimation = () => {
    setAnimation("");
  };

  const switchAnimation = animation => {
    switch (animation) {
      case "border":
        setAnimation("animate-border");
        break;
      case "both":
        setAnimation("animate-triangles both");
        break;
      case "triangles":
        setAnimation("animate-triangles");
        break;
      case "all":
        setAnimation("animate-all");
        break;
      default:
        return;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="navigationWrapper">
          <Logo
            onAnimationEnd={() => handleEndAnimation()}
            src={logo}
            className={`logo ${animation ? animation : ""}
            `}
            alt="logo"
          />
          <div className="buttons">
            <button onClick={() => switchAnimation("border")}>
              ANIMATE BORDER
            </button>
            <button onClick={() => switchAnimation("all")}>ANIMATE ALL</button>
            <button onClick={() => switchAnimation("triangles")}>
              WAITING 1
            </button>
            <button onClick={() => switchAnimation("both")}> WAITING 2 </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
