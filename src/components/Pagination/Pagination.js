import React from "react";

const Pagination = ({setPageNumber}) => {
    let forwards = ()=>{
        setPageNumber((x) => x + 1);
    };

    
 
 return( <div className="container d-flex justify-content-center gap-5 my-1">
      <button onClick={forwards}
      className="center btn btn-dark">Forwards</button>
  </div>
  );
};

export default Pagination;