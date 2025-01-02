import { useState } from "react";

const App = () => {
  const [selectedId, setSelectedId] = useState(1); // Default tab ID

  // Tabs data
  const tabs = [
    { id: 1, tab: "Tab 1", content: "Tab 1 content" },
    { id: 2, tab: "Tab 2", content: "Tab 2 content" },
    { id: 3, tab: "Tab 3", content: "Tab 3 content" },
  ];

  return (
    <div>
      <h1>Tabs Section</h1>

      {/* Render Tab Buttons */}
      <div>
        {tabs.map(({ id, tab }) => (
          <button
            key={id}
            onClick={() => setSelectedId(id)} // Set selected ID
            style={{
              fontWeight: selectedId === id ? "bold" : "normal",
              textDecoration: selectedId === id ? "underline" : "none",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Render Tab Content */}
      <div>
        <p>{tabs.find((tab) => tab.id === selectedId)?.content}</p>
      </div>
    </div>
  );
};

export default App;
