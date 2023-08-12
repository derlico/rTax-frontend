import { Component } from 'react';
import '../App.css';
import PosSearch from './PosSearch';
import PosItem from './PosItem';
import { Cart } from 'react-bootstrap-icons';

/* export class PosCatalogue extends Component{

  constructor(props){
    super(props);
    this.state = {prods:[]}
  }

  refreshList(){
    fetch(process.env.REACT_APP_API)
    .then(response => response.json())
    .then(data =>{
      this.setState({prods:data});
    });
  }

  componentDidMount(){
    this.refreshList();
  }

  componentDidUpdate(){
    this.refreshList();
  }


  render(){
    const {prods}=this.state;
    return (
      <>
        <div className="card col-lg-8 col-md-6 min-vh-75 mx-auto">
          <PosSearch />
          <hr />
          <table class="table table-bordered">
            <thead>
              <tr className='table-dark'>
                <th class="text-uppercase font-weight-bolder">Product Name</th>
                <th class="text-uppercase font-weight-bolder">Quantity</th>
                <th class="text-uppercase font-weight-bolder">Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody className='text'>

              {prods.map(prod =>
                <tr key={prod.id}>
                  <td>{prod.name}</td>
                  <td className=''>3</td>
                  <td>{prod.price}</td>
                  <td className='d-flex justify-content-center mx-0'><button className='bg-success text-light rounded-end '>Add</button>&nbsp;&nbsp;&nbsp;&nbsp;<button className='bg-danger text-light rounded'>&#10006;</button></td>
              </tr>
              )}
                
            </tbody>
          </table>
        </div>
      </>
    );

  }
} */

export class PosCatalogue extends Component{

  constructor(props){
    super(props);
    this.state = {
      prods:[],
      cartItems:[]
    }
  }

  refreshList(){
    fetch(process.env.REACT_APP_API)
    .then(response => response.json())
    .then(data =>{
      this.setState({prods:data});
    });
  }

  componentDidMount(){
    this.refreshList();
  }

  componentDidUpdate(){
    this.refreshList();
  }

/*  addToCart = (prod) => {
   this.setState((prevState))
                     
} */

  render(){
    const {prods, addToCart}=this.state;
    return (
      <>
        <div className="card col-lg-7 col-md-6 min-vh-75 mx-3">
          <PosSearch />
          <hr />
          <table class="table table-bordered">
            <thead>
              <tr className='table-dark'>
                <th class="text-uppercase font-weight-bolder">Product Name</th>
                <th class="text-uppercase font-weight-bolder">Quantity</th>
                <th class="text-uppercase font-weight-bolder">Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody className='text'>

              {prods.map((prod) =>
                <PosItem key={prod.id} prod={prod} addToCart={addToCart} />
              )}
                
            </tbody>
          </table>
        </div>
      </>
    );

  }
}