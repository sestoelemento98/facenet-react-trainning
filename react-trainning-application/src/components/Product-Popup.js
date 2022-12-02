import React, { useState, useEffect } from "react";
import "./Product-Popup.css";
function Popup({ data, handleClose }) {
  const [product, setProduct] = useState(data);


  const productChange = (event) => {
    setProduct((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const submit = async (event) => {
    event.preventDefault();
    try {
      await fetch(`${process.env.REACT_APP_BASE_URL}/${product.id}`, {
        method: "PUT",
        body: JSON.stringify(product),
        header: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
    } catch (e) {
      console.error(e);
    }
  };

  return (
    
      <td className="popup-box">
        <form >
          <div className="box">
            <span className="close-icon" onClick={handleClose}>
              x
            </span>
            <h3 className="d-flex justify-content-center">Edit Information</h3>
            <div className="row">
              <div className="col-1 align-self-center">ID:</div>
              <div className="col-9 ">
                <input
                  className="form-control"
                  type="text"
                  name="id"
                  value={product.id}
                  onChange={productChange}
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-1 align-self-center">Title:</div>
              <div className="col-9 ">
                <input
                  className="form-control"
                  type="text"
                  name="title"
                  value={product.title}
                  onChange={productChange}
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-1 align-self-center">Price:</div>
              <div className="col-9 ">
                <input
                  className="form-control"
                  type="text"
                  name="price"
                  value={product.price}
                  onChange={productChange}
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-1 align-self-center">Stock:</div>
              <div className="col-9 ">
                <input
                  className="form-control"
                  type="text"
                  name="stock"
                  value={product.stock}
                  onChange={productChange}
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-1 align-self-center">Brand:</div>
              <div className="col-9 ">
                <input
                  className="form-control"
                  type="text"
                  name="brand"
                  value={product.brand}
                  onChange={productChange}
                />
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-8"></div>
              <div className="col-2">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClose}
                >
                  Cancel
                </button>
              </div>
              <div className="col-2">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={submit}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </td>
    
  );
}

export default Popup;
