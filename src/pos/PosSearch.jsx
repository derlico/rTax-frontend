import { Component } from 'react';
import '../App.css';
import { useState } from 'react';

function PosSearch(){
    /* this.state = {prods:[]}  
    const refreshList = (data) => {
        fetch(process.env.REACT_APP_API)
        .then(response => response.json())
        .then(data =>{
          this.setState({prods:data});
        });
      } */

    
    return (
      <>
        <div className="form-group d-grid gap-2 align-items-center text-sm my-2">
            <input type="search" className='form-control w-65' name="" placeholder='Enter Search Item' />
            <button className='btn btn-success mx-0 my-0'><b>Search</b></button>
         </div>
      </>
    );
}

export default PosSearch;