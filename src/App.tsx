import React, { useState } from "react";
import "./App.scss";
import FarvePopUp from "./components/FarvePopUp";

const App: React.FC = () => {
  const [triggerPopUp, setTriggerPopUp] = useState(false);

  const toggleColorPopUp = () => {
    setTriggerPopUp(!triggerPopUp);
  };

  return (
    <div className="app__page">
      <button className="open__btn" onClick={toggleColorPopUp}>
        Åben Farve-PopUp
      </button>
      {triggerPopUp && <FarvePopUp onClose={toggleColorPopUp} />}
    </div>
  );
};

export default App;
