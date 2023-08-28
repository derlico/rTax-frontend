import React from 'react'


function NewProduct({open, onChanges}) {

    function handleClick(){
        onChanges(!open)
      }

      const handleSubmit = async (e) =>{
        e.preventDefault();
        
        const newProduct = {
            name: e.target.name.value,
            barcode: e.target.barcode.value || null,
            cost: e.target.cost.value,
            price: e.target.price.value,
            tax: e.target.tax.value,
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
                    window.alert('Product Added Successfully');
                    e.target.reset();
                    handleClick();
                    
                } else {
                    window.alert('Error adding product');
                }
            } catch (error) {
                window.alert('Error', error);
                
            }


      };

    if (!open) return null;
  return (
    <>
         <div className="container col-lg-8 col-md-6 min-vh-75 mx-auto">
     <div className='overlay'>
      <div className="newprod-container">
        <h2 className='my-1'><center>Add New Product</center></h2>
        <hr />
        <div className="container d-grid gap-2 align-items-center text-sm">
              <div className="row">               
                
                <form className="product-form" onSubmit={handleSubmit}>
                {/* <div className="col-6">
                    <div className=" my-2 mx-4">
                        <b>Product Name &nbsp;</b> 
                        <input type="text" className='form mx-4 my-2' name="" id="my_total" placeholder='Product Name' aria-label='total' />
                    </div>
                    <div className=" my-2 mx-4">
                        <b>Barcode &nbsp;</b> 
                        <input type="text" className='form mx-4 my-2' name="" id="my_total" placeholder='Product Barcode' aria-label='total' />
                    </div>
                    <div className=" my-2 mx-4">
                        <b>Cost &nbsp;</b> 
                        <input type="text" className='form mx-4 my-2' name="" id="my_total" placeholder='Product Cost' aria-label='total' />
                    </div>
                    <div className=" my-2 mx-4">
                        <b>Price &nbsp;</b> 
                        <input type="text" className='form mx-4 my-2' name="" id="my_total" placeholder='Product Price' aria-label='total' />
                    </div>
                    <div className=" my-2 mx-4">
                        <b>Taxes Applicable &nbsp;</b> 
                        <input type="text" className='form mx-4 my-2' name="" id="my_total" placeholder='Taxes' aria-label='total' />
                    </div>
                    <button
                        className='btn btn-success'
                        onClick={addProduct}>
                        Add
                    </button>

                    <button
                        className='btn btn-danger'
                        onClick={handleClick}>
                        Close
                    </button>
                </div> */}
                <div className="col-7">
                    <div className=" my-2 mx-4">
                        <b>Product Name &nbsp;</b> 
                        <input type="text" className='form mx-4 my-2' name="name" placeholder='Product Name' required />
                    </div>
                    <div className=" my-2 mx-4">
                        <b>Barcode &nbsp;</b> 
                        <input type="text" className='form mx-4 my-2' name="barcode" placeholder='Product Barcode' />
                    </div>
                    <div className=" my-2 mx-4">
                        <b>Cost &nbsp;</b> 
                        <input type="text" className='form mx-4 my-2' name="cost" placeholder='Product Cost' />
                    </div>
                    <div className=" my-2 mx-4">
                        <b>Price &nbsp;</b> 
                        <input type="text" className='form mx-4 my-2' name="price" placeholder='Product Price' required />
                    </div>
                    <div className=" my-2 mx-4">
                        <b>Taxes Applicable &nbsp;</b> 
                        <select className='form mx-4 my-2' id='tax'>
                            <option value={"0"} selected>No Tax</option>
                            <option value={"16"}>VAT(16%)</option>
                      
                        </select>
                    </div>
                    <button type='submit' className='btn btn-success w-50'>Add Product</button>
                    <button
                        className='btn btn-danger'
                        onClick={handleClick}>
                        Close
                    </button>
                </div>
                </form>
                 
              </div> 
                         
            </div>
        
      </div>
    </div>
    </div>

      
    </>
  )
}

export default NewProduct
