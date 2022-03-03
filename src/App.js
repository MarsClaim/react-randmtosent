import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import Pagination from './components/Pagination/Pagination';

function App() {
  let [pageNumber, setPageNumber] = useState(38);

  console.log(pageNumber);
  let [fetchedData, updataFetchedData]= useState([]);
  let{results}= fetchedData;

  let api= `https://rickandmortyapi.com/api/character/?page=${pageNumber}` ;

  useEffect(()=>{

    (async function(){
      let data = await fetch(api).then(res=>res.json());
      updataFetchedData(data);

    })();

  },[api]);

  return (
    <div className="App">
      <h1 className="text-center Ubuntu my-4"> 
        Rick & Morty <span ClassName="text-info"> Records </span>
      </h1>
      <div class="container">
        <div class="row">
          <div className="col-3">
          </div> 
           <div className="col-8">
              <div class="row">
                <Cards results={results} />
              </div> 
           </div>  
        </div>
      </div>
      <Pagination setPageNumber={setPageNumber}/>
    </div>
  );
}

export default App;
