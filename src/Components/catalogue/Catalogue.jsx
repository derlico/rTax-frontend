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

          

          <hr />
          
          <div className='container-fluid row'>
          <div className="col-lg-3 col-md-3">
            <div className="card h-100 min-vh-60 container">
              <div className='cart-area'>
              <button className='btn btn-success w-75' onClick={handleNewProduct}><b>Add Product</b></button>
                <NewProduct 
                open={newProd}
                onChanges={open=> handleNewProduct(open)}
              />
              <button className='btn btn-success w-75'><b>Product Barcodes</b></button>
              <button className='btn btn-success w-75'><b>Add Taxes</b></button>
              <button className='btn btn-success w-75'><b>Product Reports</b></button>
              
              </div>
                
            </div>
          </div>

          <div className="col-lg-9 col-md-6 min-vh-75 mx-auto">
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
          </div>
        </div>
      </>
    );
} 