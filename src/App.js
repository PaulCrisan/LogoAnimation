import React, { useState } from "react";
import logo, { ReactComponent as Logo } from "./logo2.svg";
import Hsay from './components/HSay';
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
      <div style={{ height: '5em',paddingBottom: '15px', backgroundColor: '#282c34', paddingLeft: '20px', paddingTop:'15px' }}>
       <div style={{width:'30%', height:'5em'}}>
        <Hsay />

       </div>

      </div>
      <div style={{ paddingBottom: '20vh', backgroundColor: '#282c34', paddingLeft: '20px', paddingRight: '15px', paddingTop: '10em'}}>
        <Hsay />
      </div>

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
