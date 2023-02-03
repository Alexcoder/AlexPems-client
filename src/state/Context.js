import React, {useState, createContext, useContext} from 'react';

export const StateContext = createContext();

export const Context = ({children}) => {
    const [menuClicked, setMenuClicked] = useState("close")

  return (
    <StateContext.Provider
    value={{menuClicked, setMenuClicked}}
    >
        {children}
    </StateContext.Provider>
  )
}

export const useGlobalState= ()=> useContext(StateContext);
