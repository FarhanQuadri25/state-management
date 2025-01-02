import { useRef, useState } from "react";

const App = () => {
  const inputRef = useRef(null);
  const [state, setState] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    setState([...state, inputRef.current.value]);
    inputRef.current.value = "";
  };
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
      <ul>
        {state.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
