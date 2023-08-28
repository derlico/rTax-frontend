import React from 'react'

const Checkout = ({open, onChange, total, tax, cart, setCart} ) => {

  const products = cart.map(item => item.id)

  function handleClick(){
    onChange(!open)
  }

  //Handles Sales psoting
  const postSale = async (e) =>{
    e.preventDefault();
    
    const newSale = {
        customer: 1,
        sale_total: e.target.sale_total.value,
        products: [...products],
        sale_tax: e.target.tax.value,
    };

        try {
            const response = await fetch(process.env.REACT_APP_SALES, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newSale),
            });

            if (response.ok){
                window.alert('Sale Posted Successfully');
                e.target.reset();
                onChange(!open)
                setCart([])
            } else {
                console.error('Error Posting Sale');
            }
        } catch (error) {
            console.error('System Error', error);
            
        }


  };

  /* const handleSubmit = async (e) =>{
    e.preventDefault();
    
    const newSale = {
        name: e.target.name.value,
        barcode: null,
        cost: e.target.cost.value,
        price: e.target.price.value,
        tax: "0",
    };

        try {
            const response = await fetch(process.env.REACT_APP_PRODUCTS, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProduct),
            });

            if (response.ok){
                console.log('Product Added Successfully');
                e.target.reset();
            } else {
                console.error('Error adding product');
            }
        } catch (error) {
            console.error('Error', error);
            
        }


  }; */

    if (!open) return null;
  return (
    <>
    <div className="container col-lg-8 col-md-6 min-vh-75 mx-auto">
     <div className='overlay'>
      <div className="checkout-container">
        <h2 className='my-1'><center>Checkout Page</center></h2>
        <hr />
        <form onSubmit={postSale}>
        <div className="container d-grid gap-2 align-items-center text-sm">
              <div className="row grid my-2">               
                <div className="col-6">
                
                <div className="input-group">
                    <span className='input-group-text bg-danger text-light' id='total'><b>Grand Total</b></span>
                    <input type="text" readOnly className='form-control text-right' value={total} name="sale_total" placeholder='0.00'/>
                  </div>
                 {/*  <div className="input-group my-2">
                    <span className='input-group-text bg-success text-light' id='total'><b>Discounts</b></span>
                    <input type="text" className='form-control text-right' name="" placeholder='0.00'/>
                  </div> */}
                  
                  <div className="input-group my-2">
                    <span className='input-group-text bg-success text-light' id='total'><b>Tax Charged</b></span>
                    <input type="text" readOnly className='form-control text-right' value={tax} name="" id="tax" placeholder='0.00'/>
                  </div>
                </div>
                <div className="col-6">
                <select className='vw-14 w-100 h-25'>
                    <option defaultValue="0">Cash</option>
                    <option value="1">Mpesa</option>
                    <option value="2">Bank</option>
                    <option value="3">Other</option>
                  </select>

                  <div className="input-group my-2">
                    <input type="text" className='form-control text-right w-50' name="" placeholder='0.00'/>
                    <span className='input-group-text bg-primary text-light w-50' id='total'><b>Submit Payment</b></span>
                  </div>

                  <div>
                    <label className='mx-2'><b>Balance:</b>0.00</label>
                  </div>

                  <button type='submit' className='btn btn-success w-50'>Post Sale</button>
                  <button
                    className='btn btn-danger'
                    onClick={handleClick}>
                    Close
                  </button>
                </div>
              </div> 
                         
            </div>
        </form>
        
        
        
      </div>
    </div>
    </div>
    </>
  )
}

export default Checkout
