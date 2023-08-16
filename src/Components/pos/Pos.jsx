import { useEffect, useState } from 'react';
import '../../App.css';
import PosSearch from './PosSearch';
import { PlusCircle } from 'phosphor-react';
import Checkout from '../modals/Checkout';
import NewCustomer from '../modals/NewCustomer';

export default function Pos(){
  //States
  const [prods, setProds] = useState([])
  const [clients, setClients] = useState([])
  
  //Rendering Products
   useEffect(() => {
    fetch(process.env.REACT_APP_PRODUCTS,{
      method: "GET",
    })
    .then(response => response.json())
    .then(data =>{
      setProds(data);
    });
  }, []);

  //Rendering Customers
  useEffect(() => {
    fetch(process.env.REACT_APP_CUSTOMERS,{
      method: "GET",
    })
    .then(response => response.json())
    .then(data =>{
      setClients(data);
    });
  }, []);
  
  
  
  //Cart
  const [cart, setCart] = useState([])

  function addToCart(id, name, price, tax){
    if(name){
      setCart(prevCart => {
        return [...prevCart, {id:id, name:name, price:price, tax:tax}]
      })
    }
    
     //proposed function call to update the local storage
   }

   function getCartTotal(){
    let sum = cart.reduce((acc, current) => Number(acc) + Number(current.price), 0)
    console.log(sum);
    return sum;
   }
   
   const [checkoutState, setCheckoutState] = useState(false);

   function handleCheckout(){
    setCheckoutState(!checkoutState);
   }

   const [newCust, setNewCust] = useState(false)

   function handleNewCustomer(){
       setNewCust(!newCust);
      }

    return (
      <>
        <div className='container-fluid'>
        
        <div className="row">
        
        {/* CATALOGUE SECTION */}

        <div className="container col-lg-8 col-md-6 min-vh-75 mx-auto">
          
          <PosSearch />
          <hr />
          <Checkout 
          open={checkoutState}
          onChange={open=> handleCheckout(open)}
          />
          <table className="table table-bordered modal-parent">
            <thead>
              <tr className='table-dark'>
                <th className="text-uppercase font-weight-bolder">Product Name</th>
                <th className="text-uppercase font-weight-bolder">Quantity</th>
                <th className="text-uppercase font-weight-bolder">Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody className='text'>

             {prods.map(prod =>   
              <tr key={prod.id}>
                <td>{prod.name}</td>
                <td className=''>0</td>
                <td>{prod.price}</td>
                <td className='d-flex justify-content-center mx-0'>
                  <button className='addBtn' onClick={(e) => addToCart(prod.id, prod.name, prod.price, prod.tax) }>
                  <PlusCircle size={30} weight="bold" />
                  </button>
                </td>
              </tr>
              )}  
            </tbody>
          </table>
          
        </div>

       
       {/*  CART SECTION */}

        <div className="col-lg-4 col-md-6">
            <div className="row-7">
                
              <div className="card h-100 min-vh-60 container">
                <div className="input-group my-2">
                    <span className='input-group-text bg-secondary text-light' id='total'><b>Customer</b></span>
                    <select className='vw-14 w-65'>
                    <option selected>Walk-in Customer</option>
                      {clients.map((client) =>
                        <option key={client.name}>{client.name}</option>
                      )}
                    
                    {/* <input type="text" className='form-control' name="" id="" placeholder='Customer Name' aria-label='total' aria-describedby='total' /> */}
                  </select>
                  <button className='addBtn' onClick={handleNewCustomer}>
                  <b>Add New</b><PlusCircle size={30} weight="bold" />
                  </button>
                  <NewCustomer
                    open={newCust}
                    onChanges={open=> handleNewCustomer(open)}
                  />
                </div>
                <hr />
                <div className='cart-area'>
                <table className='table table-bordered' id="my_cart">
                  <thead>
                  <tr className='table-primary text-light'>
                    <th className='w-50'>Item</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Tax</th>
                    <th></th>
                  </tr>
                  </thead>
                  <tbody>
                  {cart.map(carts => 
                    <tr key={carts.id}>
                      <td>{carts.name}</td>
                      <td>1</td>
                      <td>{carts.price}</td>
                      <td>{carts.tax}</td>
                    </tr>
              )}
                  </tbody>
                </table>
                </div>
                
                </div>
            </div>

           
            <div className="container d-grid gap-2 align-items-center text-sm">
              <div className="row grid my-2">               
                <div className="col-6">
                  <div className="input-group">
                    <span className='input-group-text bg-primary text-light' id='total'><b>Total ({cart.length})</b></span>
                    <input type="text" readOnly className='form-control text-right' name="" id="my_total" placeholder='0.00' aria-label='total' value={getCartTotal()} />
                  </div>
                  <div className="input-group my-2">
                    <span className='input-group-text bg-danger text-light' id='total'><b>Tax Charged</b></span>
                    <input type="text" readOnly className='form-control text-right' name="" id="tax" placeholder='0.00'/>
                  </div>
                </div>
                <div className="col-6">
                  &nbsp;&nbsp;
                  <select className='vw-14 w-75 h-40'>
                    <option defaultValue="0">Cash</option>
                    <option value="1">Mpesa</option>
                    <option value="2">Bank</option>
                    <option value="3">Other</option>
                  </select>
                  <button className='btn btn-success mx-2 my-2 w-100' onClick={handleCheckout}>Checkout</button>
                  
                </div>
              </div> 
                         
            </div>

        </div>
      </div>
      </div>


      {/* CHECKOUT POPUP SECT */}

      
        
      
      </>
    )
}