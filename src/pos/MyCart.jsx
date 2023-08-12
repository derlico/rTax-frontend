import React, {Component} from "react";

class MyCart extends Component {
    render(){
        const{ cartItems } = this.props;
        return(
            {cartItems.map((item, index) => (
                <tr key={index}>
                    <td>{prod.name}</td>
                    <td>1</td>
                    <td contentEditable='true'>{prod.price}</td>
                    <td className='d-flex justify-content-center mx-0'><button className='bg-success text-light rounded-end ' onClick={this.addToCart}>Add</button></td>
                </tr>
            ))}
            
        )
    }
}

export default MyCart;