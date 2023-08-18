import '../../App.css';
import "./Card.css";
//import { Catalogue } from './Catalogue';

function Home() {
    return (
      <>
        <div className='container my-2'>
        <div className="row">
        
        <div className="col-4">
                
           {/* Products Section Menu */}
            <div className="card h-100 min-vh-60 container">
                <img src={"logo.png"}
                    alt="Nike-Shoe"
                    className="sneaaker-img"
                />
                <div className="button-box">
                <button className="btn-menu" >
                    Products
                </button>
                </div>
            </div>
        </div>

        <div className="col-4">
                
           {/* POS Section Menu */}
            <div className="card h-100 min-vh-60 container">
                <img src={"logo.png"}
                    alt="Nike-Shoe"
                    className="sneaaker-img"
                />
                <div className="button-box">
                <button className="btn-menu" >
                    POS
                </button>
                </div>
            </div>
        </div>


        <div className="col-4">
                
           {/* Reports Section Menu */}
            <div className="card h-100 min-vh-60 container">
                <img src={"logo.png"}
                    alt="Nike-Shoe"
                    className="sneaaker-img"
                />
                <div className="button-box">
                <button className="btn-menu" >
                    Reports
                </button>
                </div>
            </div>
        </div>

          
        </div>
      </div>
      </>
    );
  }
  
  export default Home;