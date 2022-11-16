import './Product.css'
import './Button.js'
import Button from './Button.js';
function Product(props) {
    return(
        <tr>
            <td className='text-center'>{props.product.id}</td>
            <td>{props.product.title}</td>
            <td className='text-center'>{props.product.price}</td>
            <td className='text-center'>{props.product.stock}</td>
            <td>{props.product.brand}</td>
            <td className='text-center'>
                <Button handleBtnUpdate={props.handleBtnUpdate}
                        handleBtnDelete={props.handleBtnDelete}></Button>   
            </td>
        </tr>
    )
}

export default Product;