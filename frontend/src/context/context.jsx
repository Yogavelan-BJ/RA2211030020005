import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  //using custom data as the Authorization token is not working
  const [data, setData] = useState([
    { id: 1, title: "Pollution", image: "pollution.jpg" },
    { id: 2, title: "Environment", image: "environment.png" },
    { id: 3, title: "Education", image: "education.jpg" },
    { id: 4, title: "Importance of Education", image: "education.jpg" },
    { id: 5, title: "Pollution", image: "pollution.jpg" },
    { id: 5, title: "Protect Environment", image: "environment.png" },
  ]);

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
