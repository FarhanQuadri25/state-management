import React, { createContext, useContext, useState } from "react";

// 1. Create the context
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState("Syed");

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

const UserDisplay = () => {
  // 3. Use context data in a child component
  const { user } = useContext(AppContext);
  return <h1>Logged in as: {user}</h1>;
};

const ChangeUser = () => {
  const { setUser } = useContext(AppContext);
  return <button onClick={() => setUser("New User")}>Change User</button>;
};

const App = () => {
  return (
    <AppProvider>
      <UserDisplay />
      <ChangeUser />
    </AppProvider>
  );
};

export default App;
