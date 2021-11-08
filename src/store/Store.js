import React,{createContext, useState} from 'react';

export const SearchContext= createContext();
function RecepieProvider(props) {
    const [list, setList] = useState([]);
    const contextValue={
        list,setList
    }
    return (
       <SearchContext.Provider value={contextValue}>
           {props.children}
       </SearchContext.Provider>
    )
}

export default RecepieProvider;



