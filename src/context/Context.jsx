import React, { useEffect, useState } from "react";

export const AppContext = React.createContext();

function AppContextProvider({ children }) {
  const [cartArr, setCartArr] = useState([]);
  useEffect(() => {}, []);

  const value = {
    cartArr,
    setCartArr,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
