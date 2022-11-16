import './Button.css'
// import PropTypes from "prop-types";
import React from 'react';
import { AiFillDelete, AiOutlineForm } from "react-icons/ai";

//Function component Button
function Button(props) {
    return(
        <div className='container'>
            <button className='btn btn-success ' onClick={props.handleBtnUpdate}><AiOutlineForm/>Update</button>
            <button className='btn btn-danger custom-btn-delete'   onClick={props.handleBtnDelete}><AiFillDelete/>Delete</button>
        </div>
    );
}


//Button class component
// class Button extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     render(){
//         return(
//             <div className='container'>
//                 <button className='custom-Btn' style={this.props.buttonColor} onClick={props.onClick}>{this.props.buttonText}</button>
//             </div>
//         )
//     }
// }

// Button.defaultProps = {
//     buttonText: 'This text is default props',
//     buttonColor: {
//         'color': 'blue'
//     }
// }

// Button.propTypes = {
//     buttonColor: PropTypes.object.isRequired,
//     buttonText: PropTypes.string.isRequired
// }
export default Button;  