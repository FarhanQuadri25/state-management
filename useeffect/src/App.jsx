import { useState, useEffect } from "react";

const App = () => {
  const [names, setNames] = useState([]);
  useEffect(() => {
    fetch("/names.json")
      .then((response) => response.json())
      .then((data) => setNames(data));
  }, [names]);
  const [selected, setSelected] = useState(null);
  return (
    <>
      <div>
        {names.map((name) => (
          <button onClick={() => setSelected(name)}>{name}</button>
        ))}
        <div>{selected}</div>
      </div>
    </>
  );
};

export default App;
