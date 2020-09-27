import React, { Children, createContext, useContext, useReducer } from 'react';
export const DataLayerContext = createContext();
export const DataLayer = ({ initialState, reducer, n }) => {
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {Children}
  </DataLayerContext.Provider>;
};
export const useDatalayerValue = () => useContext(DataLayerContext);
