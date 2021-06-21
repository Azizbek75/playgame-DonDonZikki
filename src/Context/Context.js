import React,{ createContext,useReducer } from 'react'


export const DATA = createContext();

const DataProvider = ({children}) => {

    const reducer = (state,action) => {
        return state;
    }

    const [data,dispacth] = useReducer(reducer,[
        {id:1,class:'fas fa-hand-scissors fa-6x'},
        {id:2,class:'fas fa-hand-rock fa-6x'},
        {id:3,class:'fas fa-hand-paper fa-6x'}
    ])
    return (
        <DATA.Provider value={[data,dispacth]}>
            {children}
        </DATA.Provider>
    )
}

export default DataProvider;