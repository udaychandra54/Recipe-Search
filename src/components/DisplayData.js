import React,{Fragment, useContext} from 'react';
import { SearchContext } from '../store/Store';
import List from './List';

function DisplayData() {
    const {list} = useContext(SearchContext);
   console.log(list);
    return (
       <Fragment>
           <div className="container">
           {list.length===0 && (
                <center>
                    <h3>Loading...</h3>
                </center>
            )}
               <div className="row">
            
               {list.length!==0 && list.map(item=>{
                    return  <List key={item.recipe.image} data={item}/>
                  })}
              </div>
           </div>
       </Fragment>
    )
}

export default DisplayData
