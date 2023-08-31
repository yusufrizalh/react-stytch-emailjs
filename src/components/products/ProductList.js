import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const ProductList = () => {
  const [products, setProducts] = useState([]); // array kosong

  const getAllProducts = async () => {
    const result = await axios.get("http://localhost:3002/products");
    setProducts(result.data); // mengisi products dengan result.data
    console.log(result.data); // pengecekan
  };

  useEffect(() => {
    getAllProducts();
  }, []); // []: hanya dirender 1x saja diawal

  const [keyword, setKeyword] = useState("");
  const [searchParam] = useState(["name"]);

  function search(params) {
    return params.filter((item) => {
      return searchParam.some((items) => {
        return (
          item[items].toString().toLowerCase().indexOf(keyword.toLowerCase()) >
          -1
        );
      });
    });
  }

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:3002/products/${id}`);
    getAllProducts();
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <h3>Products List</h3>
        <a href="/newproduct" className="btn btn-md btn-primary">
          New Product
        </a>
      </div>

      <hr />
      <div className="mb-3 mt-3">
        <input
          className="form-control"
          placeholder="Search product name"
          type="search"
          autoComplete="off"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
        />
      </div>
      <table className="table table-hover table-bordered mt-3">
        <thead>
          <tr>
            <th>NO</th>
            <th>PRODUCT NAME</th>
            <th>PRODUCT PRICE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {search(products).map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <Link
                  to={`/editproduct/${product.id}`}
                  className="btn btn-sm btn-outline-info"
                >
                  Edit
                </Link>{" "}
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => {
                    confirmAlert({
                      title: "Delete Product",
                      message: "Are you sure to delete?",
                      buttons: [
                        {
                          label: "Yes",
                          onClick: () => deleteProduct(product.id),
                        },
                        {
                          label: "Cancel",
                          onClick: () => alert("Cancel"),
                        },
                      ],
                    });
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
