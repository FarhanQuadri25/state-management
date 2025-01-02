import { useState, useMemo } from "react";

const App = () => {
  const [numbers] = useState([10, 20, 30]);
  const total = useMemo(
    () => numbers.reduce((acc, item) => acc + item, 0),
    [numbers]
  );
  const [names] = useState(["John", "Doe", "Jane"]);
  const sortedNames = useMemo(() => [...names].sort(), [names]);
  return (
    <div>
      <h1>Names:{sortedNames.join(", ")}</h1>
    </div>
  );
};

export default App;
