import React from 'react'

function List(props) {
    
    return (
        <div className="col mt-3">
            <div className="card shadow border-0 mx-auto" >
                <div className="img p-0">
                <img  src={props.data.recipe.image}/>
                </div>
                <div className="info p-2">
                    <div className="name">
                        Name : {props.data.recipe.label}
                    </div>
                    <div className="cal">
                        Calories : {props.data.recipe.calories.toFixed(2)}
                    </div>
                    <div className="steps">
                        {props.data.recipe.ingredientLines.map(line=>{
                          return  <div key={Math.random()}>{line}</div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List
