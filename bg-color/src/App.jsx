import { useState } from "react";

const App = () => {
  const [changeColor, setChangeColor] = useState(false);
  const handleClick = () => {
    setChangeColor(!changeColor);
  };
  return (
    <div
      style={{
        backgroundColor: changeColor ? "red" : "lightblue",
        transition: "background-color 0.5s",
        borderRadius: "14px",
        paddingTop: "2px",
        paddingBottom: "10px",
      }}
    >
      <h1>Background Color</h1>
      <button
        onClick={handleClick}
        style={{
          padding: "10px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
          fontFamily:"system-ui",
        }}
      >
        {" "}
        Change color
      </button>
    </div>
  );
};

export default App;
