import React, { createContext, useContext, useEffect, useState } from "react";

const ErrorSuccessContext = createContext();

export const ErrorSuccessContextProvider = ({ children }) => {
  const [errorMessages, setErrorMessages] = useState([]);
  const [successMessages, setSuccessMessages] = useState([]);
  const [password,setPassword] = useState(null)

  const setErrorBox = (message) => {
    const id = Date.now(); // Unique ID based on timestamp
    setErrorMessages((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setErrorMessages((prev) => prev.filter((err) => err.id !== id));
    }, 5000);
  };

  const setSuccessBox = (message) => {
    const id = Date.now();
    setSuccessMessages((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setSuccessMessages((prev) => prev.filter((msg) => msg.id !== id));
    }, 5000);
  };

  useEffect(()=>{
    if(password){
       setTimeout(() => {
          setPassword(null)
       }, 60000);
    }
  },[password])

  return (
    <ErrorSuccessContext.Provider value={{ setErrorBox, errorMessages, setSuccessBox, successMessages,password,setPassword }}>
      {children}
    </ErrorSuccessContext.Provider>
  );
};

export const useErrorSuccessContext = () => {
  return useContext(ErrorSuccessContext);
};

export default ErrorSuccessContext;
