import productModel from "../models/productModel.js";

// getAllProducts
export const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.findAll(); // SELECT * FROM products
    res.json(products);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// getProductById
export const getProductById = async (req, res) => {
  try {
    const product = await productModel.findAll({
      where: {
        id: req.params.id,
      }, // SELECT * FROM products WHERE id
    });
    res.json(product[0]); // get id
  } catch (error) {
    res.json({ message: error.message });
  }
};

// createProduct
export const createProduct = async (req, res) => {
  try {
    await productModel.create(req.body); // INSERT INTO products VALUES
    res.json({ message: "Product was created!" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// updateProduct
export const updateProduct = async (req, res) => {
  try {
    await productModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ message: "Product was updated!" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// deleteProduct
export const deleteProduct = async (req, res) => {
  try {
    await productModel.destroy({
      where: { id: req.params.id },
    });
    res.json({ message: "Product was deleted!" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
