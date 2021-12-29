import {
    useContext,
    useEffect,
    createContext,
    useReducer,
}
from 'react';

export const DataLayerContext=createContext();


export const DataLayer=({intialState,reducer,children})=>{
    return <DataLayerContext.Provider value={useReducer(reducer,intialState )} >
        {children}
    </DataLayerContext.Provider>
};

export const useDataLayerValue=()=>useContext(DataLayerContext);






