import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const getProductById = async () => {
    try {
      const result = await axios.get(`http://localhost:3002/products/${id}`);
      console.log(result.data); // pengecekan
      setName(result.data.name);
      setPrice(result.data.price);
      setDescription(result.data.description);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProductById();
  });

  const updateProduct = async (event) => {
    event.preventDefault(); // menghindari reload
    try {
      await axios.put(`http://localhost:3002/products/${id}`, {
        name: name,
        price: price,
        description: description,
      });
      alert("Product was updated!");
      navigate("/products"); // redirect ke ProductList
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h5>Create New Product</h5>
            </div>
            <div className="card-body">
              <form onSubmit={updateProduct}>
                <div className="mb-3">
                  <label className="form-label">
                    <b>Product Name</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter product name"
                    required
                    autoComplete="off"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    <b>Product Price</b>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter product price"
                    required
                    autoComplete="off"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    <b>Description</b>
                  </label>
                  <textarea
                    className="form-control"
                    cols="20"
                    rows="5"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  ></textarea>
                </div>
                <div className="mt-3">
                  <button type="submit" className="btn btn-md btn-primary">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductEdit;
