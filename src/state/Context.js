import React, {useState, createContext, useContext} from 'react';

export const StateContext = createContext();

export const Context = ({children}) => {
    const [menuClicked, setMenuClicked] = useState("close");
    const [search, setSearch]= useState({})
    const [selected, setSelected] = useState(0);

  return (
    <StateContext.Provider
    value={{menuClicked, setMenuClicked, selected, setSelected,
            search, setSearch}}
            >
        {children}
    </StateContext.Provider>
  )
}

export const useGlobalState= ()=> useContext(StateContext);
