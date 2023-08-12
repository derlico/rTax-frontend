import '../App.css';

function PosCart() {
    return (
      <>
        <div className="col-lg-4 col-md-6">
            <div className="row-7">
                
              <div className="card h-100 min-vh-60 h-50 container">
                <div className="input-group my-2">
                    <span className='input-group-text bg-secondary text-light' id='total'><b>Customer</b></span>
                    <select className='vw-14 w-75'>
                    <option selected value="0">Walk-in Customer</option>
                    {/* <input type="text" className='form-control' name="" id="" placeholder='Customer Name' aria-label='total' aria-describedby='total' /> */}
                  </select>
                </div>
                <hr />
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
                  </tbody>
                </table>
                </div>
            </div>

            <div className="card d-grid gap-2 align-items-center text-sm container">
              <div className="row grid my-2">               
                <div className="col-6">
                  <div className="input-group">
                    <span className='input-group-text bg-primary text-light' id='total'><b>Total</b></span>
                    <label className='form-control text-right' id="my_total"/>
                  </div>
                  <div className="input-group my-2">
                    <span className='input-group-text bg-danger text-light' id='total'><b>Tax Charged</b></span>
                    <input type="text" readonly className='form-control text-right' name="" id="tax" placeholder='0.00' aria-label='total' aria-describedby='total' />
                  </div>
                </div>
                <div className="col-6">
                  &nbsp;&nbsp;
                  <select className='vw-14 w-75 h-40'>
                    <option selected value="0">Cash</option>
                    <option value="1">Mpesa</option>
                    <option value="2">Bank</option>
                    <option value="3">Other</option>
                  </select>
                  <button className='btn btn-success mx-2 my-2 w-100'>Checkout</button>
                </div>
              </div> 
                         
            </div>

        </div>
      </>
    );
  }
  
  export default PosCart;