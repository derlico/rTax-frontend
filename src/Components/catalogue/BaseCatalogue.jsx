import '../../App.css';
import { Catalogue } from './Catalogue';

function BaseCatalogue() {
    return (
      <>
        <div className='container-fluid'>
        <div className="row">
          <Catalogue />
        </div>
      </div>
      </>
    );
  }
  
  export default BaseCatalogue;