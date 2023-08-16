import { useEffect, useState } from 'react';
import '../../App.css';
import { Pencil } from 'phosphor-react';
import Product from './Product';
import NewProduct from '../modals/NewProduct';

export function Catalogue (){

  const [prods, setProds] = useState([])

 useEffect(() => {
    fetch(process.env.REACT_APP_PRODUCTS,{
      method: "GET",

    })
    .then(response => response.json())
    .then(data =>{
      setProds(data);
    });
 }, []);

 //Modal state

    const [newProd, setNewProd] = useState(false)

    function handleNewProduct(){
        setNewProd(!newProd);
       }
       
    return (
      <>
        <div className="container">
          <Product />
          <hr />

          <button className='btn btn-success mx-0 my-2 w-25 mx-2' onClick={handleNewProduct}><b>Add Product</b></button>
          <NewProduct 
          open={newProd}
          onChanges={open=> handleNewProduct(open)}
          />
          <button className='btn btn-success mx-0 my-2 w-25 mx-2'><b>Add Tax</b></button>
          <button className='btn btn-success mx-0 my-2 w-25 mx-2'><b>Product Reports</b></button>
          
          <table className="table table-bordered">
            <thead>
              <tr className='table-dark'>
                <th className="text-uppercase font-weight-bolder">Product Name</th>
                <th className="text-uppercase font-weight-bolder">Barcode</th>
                <th className="text-uppercase font-weight-bolder">Cost</th>
                <th className="text-uppercase font-weight-bolder">Price</th>
                <th className="text-uppercase font-weight-bolder">Taxes</th>
                <th></th>
              </tr>
            </thead>
            <tbody className='text'>

             {prods.map(prod =>
                <tr key={prod.id}>
                  <td>{prod.name}</td>
                  <td >{prod.barcode}</td>
                  <td>{prod.cost}</td>
                  <td>{prod.price}</td>
                  <td>{prod.tax}</td>
                  <td className='d-flex justify-content-center mx-0'>
                  <button className='addBtn'>
                    <Pencil size={30} weight="bold" />
                  </button></td>
              </tr>
              )}
                
            </tbody>
          </table>
        </div>
      </>
    );
} 