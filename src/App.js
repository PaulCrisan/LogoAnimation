import React, { useState } from "react";
import logo, { ReactComponent as Logo } from "./logo2.svg";
import "./App.css";
import "./styles.scss";

function App() {
  const [animation, setAnimation] = useState("");
  const [IsAnimationEnded, setAnimationEnded] = useState(true);

  const handleEndAnimation = () => {
    setAnimation("");
    setAnimationEnded(true);
  };

  const switchAnimation = animation => {
    setAnimationEnded(false);

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
            <button
              disabled={IsAnimationEnded ? false : true}
              onClick={() => switchAnimation("border")}
            >
              ANIMATE BORDER
            </button>
            <button
              disabled={IsAnimationEnded ? false : true}
              onClick={() => switchAnimation("all")}
            >
              ANIMATE ALL
            </button>
            <button
              disabled={IsAnimationEnded ? false : true}
              onClick={() => switchAnimation("triangles")}
            >
              WAITING 1
            </button>
            <button
              disabled={IsAnimationEnded ? false : true}
              onClick={() => switchAnimation("both")}
            >
              WAITING 2
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
