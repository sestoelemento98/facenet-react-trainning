import "./Product.css";
import "./Button.js";
import Button from "./Button.js";
import Popup from "./Product-Popup";
import { useState } from "react";
function Product({ data,index }) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen)
  };
  const handleBtnDelete = () => {};

  return (
    <tr>
      <td className="text-center">{data.id}</td>
      <td>{data.title}</td>
      <td className="text-center">{data.price}</td>
      <td className="text-center">{data.stock}</td>
      <td>{data.brand}</td>
      <td className="text-center">
        <Button
          handleBtnUpdate={togglePopup}
          handleBtnDelete={handleBtnDelete}
        ></Button>
      </td>
      {isOpen && <Popup data={data} handleClose={togglePopup}/>}
      
    </tr>
  );
}

export default Product;
