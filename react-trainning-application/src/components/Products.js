import './Products.css';
import './Product.js';
import Product from './Product.js';
function Products (props) {
    return (
        <div className='container d-flex flex-column justify-content-center'>
            <h1 className='mx-auto'>Table of list products</h1>
            <table className='table table-bordered table-striped align-middle mt-5 mb-5'>
                <thead>
                    <tr className='text-center'>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Brand</th>
                        <th >Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.listOfProducts.map(
                        element => <Product product={element} handleBtnUpdate={props.handleBtnUpdate}
                                    handleBtnDelete={props.handleBtnDelete}
                                    key={element.id}></Product>
                    )}
                  
                </tbody>
            </table>
        </div>
    )
}

export default Products;