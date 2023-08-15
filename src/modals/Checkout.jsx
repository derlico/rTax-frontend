import React from 'react'

const Checkout = ({open, onChange}) => {

  function handleClick(){
    onChange(!open)
  }

    if (!open) return null;
  return (
    <>
    <div className="container col-lg-8 col-md-6 min-vh-75 mx-auto">
     <div className='overlay'>
      <div className="modal-container">
        <h2 className='my-1'><center>Checkout Page</center></h2>
        <hr />
        <div className="container d-grid gap-2 align-items-center text-sm">
              <div className="row grid my-2">               
                <div className="col-6">
                
                <div className="input-group">
                    <span className='input-group-text bg-danger text-light' id='total'><b>Grand Total</b></span>
                    <input type="text" readOnly className='form-control text-right' name="" id="my_total" placeholder='0.00' aria-label='total' />
                  </div>
                  <div className="input-group my-2">
                    <span className='input-group-text bg-success text-light' id='total'><b>Discounts</b></span>
                    <input type="text" className='form-control text-right' name="" id="my_total" placeholder='0.00' aria-label='total' />
                  </div>
                  
                  <div className="input-group my-2">
                    <span className='input-group-text bg-success text-light' id='total'><b>Tax Charged</b></span>
                    <input type="text" readOnly className='form-control text-right' name="" id="tax" placeholder='0.00'/>
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
                    <input type="text" className='form-control text-right w-50' name="" id="my_total" placeholder='0.00' aria-label='total' />
                    <span className='input-group-text bg-primary text-light w-50' id='total'><b>Submit Payment</b></span>
                  </div>

                  <div>
                    <label className='mx-2'><b>Balance:</b>0.00</label>
                  </div>

                  <button
                    className='btn btn-success w-50'>
                    Checkout
                  </button>
                  <button
                    className='btn btn-danger'
                    onClick={handleClick}>
                    Close
                  </button>
                </div>
              </div> 
                         
            </div>
        
        
        
      </div>
    </div>
    </div>
    </>
  )
}

export default Checkout
