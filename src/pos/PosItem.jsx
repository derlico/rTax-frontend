import { Component } from 'react';
import '../App.css';
import { PlusCircle } from 'phosphor-react';

class PosItem extends Component{

    handleAddToCart = () => {
        const {prod, addToCart} = this.props;
        addToCart(prod);
    };
  render(){
    const {prod}=this.props;
    return (
      <tr>
        <td>{prod.name}</td>
        <td>1</td>
        <td contentEditable='true'>{prod.price}</td>
        <td className='d-flex justify-content-center mx-0'>
          <button className='addBtn' onClick={this.addToCart}>
            <PlusCircle size={30} weight="bold" />
          </button>
        </td>
      </tr>
     );
    }
  }
export default PosItem;