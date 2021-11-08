import React, {  useState,useContext,useEffect } from "react";
import { SearchContext } from "../store/Store";

function ApiData() {
  const [inputSearch, setInputSearch] = useState("eggs");
  const {setList} = useContext(SearchContext);
  let apiId = "e81e7332";
  let apiKey = "ba433bf0322b305e27042db69c1685ab";

   const getFetchData=async()=>{
   
    const response=await fetch(
        `https://api.edamam.com/search?q=${inputSearch}&app_id=${apiId}&app_key=${apiKey}`
      )
    const data=await response.json();
    console.log(data);
      setList(data.hits)
   }
  useEffect(() => {
    console.log('enter');
    
    console.log(inputSearch);
    getFetchData().catch(err=>{
      console.log(err);
    });
  }, [])

  const submitHandler=(e)=>{
    e.preventDefault();
    setList([]);
    getFetchData();
    
  }
  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="email">Enter Search:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Search"
            onChange={(e) => setInputSearch(e.target.value)}
            id="search"
          />
        </div>
        <div className="container">
          <button className="btn btn-info">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ApiData;
