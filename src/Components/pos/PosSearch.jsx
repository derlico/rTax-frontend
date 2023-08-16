import '../../App.css';

function PosSearch(){
   
    return (
      <>
        <div className="form-group d-grid gap-2 align-items-center text-sm my-2">
        <div className="input-group w-65">
          <input type="search" className='form-control w-65' name="" placeholder='Enter Search Item' />
          <button className='btn btn-success mx-2 my-0'><b>Search</b></button>
        </div>            
         </div>
      </>
    );
}

export default PosSearch;