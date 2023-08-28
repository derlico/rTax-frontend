import { useEffect, useState } from 'react';
import '../../App.css';
import PosSearch from './PosSearch';
import { Backspace, PlusCircle } from 'phosphor-react';
import Checkout from '../modals/Checkout';
import NewCustomer from '../modals/NewCustomer';

export default function Pos(){
  //States
  const [prods, setProds] = useState([])
  const [clients, setClients] = useState([])
  const [stocks, setStocks] = useState([])
  
  //to update for dynamic render
  let qty = 1;
  
  //Rendering Products, Stocks and Customers
   useEffect(() => {
    
    //Rendering Products
    fetch(process.env.REACT_APP_PRODUCTS,{
      method: "GET",
    })
    .then(response => response.json())
    .then(data =>{
      setProds(data);
    });

    //Rendering Customers
    fetch(process.env.REACT_APP_CUSTOMERS,{
      method: "GET",
    })
    .then(response => response.json())
    .then(data =>{
      setClients(data);
    });

    //Rendering Stocks
    fetch(process.env.REACT_APP_STOCKS,{
      method: "GET",
    })
    .then(response => response.json())
    .then(data =>{
      setStocks(data);
    });

  }, []);


  function getStocks(id){
    let stockVal = []
    stockVal = stocks.filter((pq) => pq.productID === id);
    const qty = stockVal.reduce((acc, current) => Number(acc) + Number(current.quantity), 0)
    /* const qty = stockVal ? stockVal.quantity : 0; */

    return qty
  }
  
  
  
  //Cart
  const [cart, setCart] = useState([])

  function addToCart(id, name, qty, price, tax){
    if(name){
     const existingIndex = cart.findIndex(item => item.id === id);
     const taxValue = +Number.parseFloat((tax/100) * price).toFixed(2)
      
        if(existingIndex !== -1){
          const cartUpdate = [...cart]
          cartUpdate[existingIndex].qty += 1;
          cartUpdate[existingIndex].price = price * cartUpdate[existingIndex].qty
          const tax_Val = cartUpdate[existingIndex].price * (tax/100)
          cartUpdate[existingIndex].tax = +Number.parseFloat(tax_Val).toFixed(2)
          setCart(cartUpdate);
        }else {
          setCart(prevCart => {
              return [...new Set([...prevCart, {id:id, name:name, qty:qty, price:price, tax:taxValue}])]
            //return [...prevCart, {id:id, name:name, price:price, tax:tax}]
          })
        }
 
    }
    
   }

   function updateItemQty(id, newQty){
     
   const updatedItemCart = cart.map( item => {
    if (item.id === id ){
      const newPrice = item.price * newQty
      const newTax = +Number.parseFloat(newPrice * (tax/100)).toFixed(2)
      return { ...item, qty:newQty, price:newPrice, tax:newTax}
    }
    return item
   });
    setCart(updatedItemCart)

   }

   function updateItemPrice(id, newPrice){
     
    const updatedItemCart = cart.map( item => {
     if (item.id === id ){
       const newPrices = newPrice * item.qty
       const newTax = +Number.parseFloat(newPrices * (tax/100)).toFixed(2)
       return { ...item, price:newPrices, tax:newTax}

     }
     return item
    });
     setCart(updatedItemCart)
 
    }

   function removeFromCart(id){
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);

   }

   //tax and total 
    const [total, setTotal] = useState(0)
    const [tax, setTax] = useState(0)

   function handleValues(){
    setTotal(getCartTotal())
    setTax(getCartTax())
   }

   function getCartTotal(){
    let sum = cart.reduce((acc, current) => Number(acc) + Number(current.price), 0)
    return sum;
   }
   
   function getCartTax(){
    let totalTax = cart.reduce((acc, current) => Number(acc) + Number(current.tax), 0)
    return totalTax;
   }

   const [checkoutState, setCheckoutState] = useState(false);

   function handleCheckout(){
    handleValues()
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
          cart={cart} setCart={setCart}
          total={total}
          tax={tax}
          open={checkoutState}
          onChange={open=> handleCheckout(open)}
          />
          <table className="table table-bordered modal-parent scrollable-table">
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
                <td>{getStocks(prod.id)}</td>
                
                <td>{prod.price}</td>
                <td className='d-flex justify-content-center mx-0'>
                  <button className='addBtn' onClick={(e) => addToCart(prod.id, prod.name, qty, prod.price, prod.tax) }>
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
                <div className='scrollable-area'>
                <table className='table table-bordered scrollable-table' id="my_cart">
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
                  {cart.map(item => 
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td contentEditable='true' onChange={(e) => updateItemQty(item.id, e.target.value)}>{item.qty}</td>
                      <td contentEditable='true' onChange={(e) => updateItemPrice(item.id, e.target.value)}>{item.price}</td>
                      <td>{item.tax}</td>
                      <td> <button className='delBtn' onClick={(e) => removeFromCart(item.id) }>
                  <Backspace size={24} weight="bold" />
                  </button></td>
                    </tr>
              )}
                  </tbody>
                </table>
                </div>
                
                </div>
            </div>

           {/* CHECKOUT PAYMENT SECTION */}
            <div className="container d-grid gap-2 align-items-center text-sm">
              <div className="row grid my-2">               
                <div className="col-6">
                  <div className="input-group">
                    <span className='input-group-text bg-primary text-light' id='total'><b>Total ({cart.length})</b></span>
                    <input type="text" readOnly className='form-control text-right' name="" id="my_total" placeholder='0.00' aria-label='total' value={getCartTotal()} />
                  </div>
                  <div className="input-group my-2">
                    <span className='input-group-text bg-danger text-light' id='total'><b>Total Tax</b></span>
                    <input type="text" readOnly className='form-control text-right' name="" id="tax" placeholder='0.00' value={getCartTax()}/>
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