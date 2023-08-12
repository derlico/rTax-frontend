import '../App.css';
import PosCart from './PosCart';
import {PosCatalogue} from './PosCatalogue';

function Pos() {
    return (
      <>
        <div className='container-fluid'>
        <div className="row">
          <PosCatalogue />
          <PosCart />
        </div>
      </div>
      </>
    );
  }
  
  export default Pos;