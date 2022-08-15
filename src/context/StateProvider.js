import React, { createContext, useContext, useReducer } from "react";

//Prepare the data layer
export const StateContext = createContext();

//Wrap the app and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull infomration from the data layer
export const useStateValue = () => useContext(StateContext);
