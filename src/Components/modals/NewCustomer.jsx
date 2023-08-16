import React from 'react'


function NewCustomer({open, onChanges}) {

    function handleClick(){
        onChanges(!open)
      }

      const handleSubmit = async (e) =>{
        e.preventDefault();
        
        const newCustomer = {
            name: e.target.name.value,
            phone: e.target.phone.value,
            group: "0",
            location: e.target.location.value,
        };

            try {
                const response = await fetch(process.env.REACT_APP_CUSTOMERS, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newCustomer),
                });

                if (response.ok){
                    console.log('Customer Added Successfully');
                    e.target.reset();
                } else {
                    console.error('Error adding Customer');
                }
            } catch (error) {
                console.error('Error', error);
                
            }


      };

    if (!open) return null;
  return (
    <>
         <div className="container col-lg-8 col-md-6 min-vh-75 mx-auto">
     <div className='overlay'>
      <div className="newprod-container">
        <h2 className='my-1'><center>Add New Customer</center></h2>
        <hr />
        <div className="container d-grid gap-2 align-items-center text-sm">
              <div className="row">               
                
                <form className="product-form" onSubmit={handleSubmit}>
                <div className="col-7">
                    <div className=" my-2 mx-4">
                        <b>Customer Name &nbsp;</b> 
                        <input type="text" className='form mx-4 my-2' name="name" placeholder='Customer Name' required />
                    </div>
                    <div className=" my-2 mx-4">
                        <b>Phone Number&nbsp;</b> 
                        <input type="text" className='form mx-4 my-2' name="phone" placeholder='07123456789' required />
                    </div>
                    <div className=" my-2 mx-4">
                        <b>Location &nbsp;</b> 
                        <input type="text" className='form mx-4 my-2' name="location" placeholder='e.g. Nairobi' required />
                    </div>
                    <button type='submit' className='btn btn-success w-50'>Add Customer</button>
                    <button
                        className='btn btn-danger'
                        onClick={handleClick}>
                        Cancel
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

export default NewCustomer
