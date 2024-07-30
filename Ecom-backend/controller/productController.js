const product = require("../models/productModel");

exports.createProduct = async (req, res) => {
  const { title, price, description, category, image } = req.body;

  try {
    const newProduct = await product.create({
      title,
      price,
      description,
      category,
      image,
    });

    if (!title || !price || !description || !category || !image) {
      return res
        .status(400)
        .json({ message: "product fields cannot be empty" });
    }
    res.status(200).json({ succuss: true, data: newProduct });
  } catch (err) {
    console.log(err.message);
  }
};

exports.getProducts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const products = await product
    .find()
    .skip((page - 1) * limit)
    .limit(limit);
  res.status(200).send({ products });
};

exports.getProductById = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const products = await product.findById(req.params.id);
    console.log(products);
    res.status(200).send(products);
  } catch (error) {
    next(error);
    console.log(error);
  }
  // console.log(req);
  // console.log("This was GET requested:", req.params.id);
  // res.status(200).send({ message: `get product for id:${req.params.id}` });
};

exports.deleteProductById = async (req, res) => {
  try {
    const selectedProduct = await product.findById(req.params.id);
    if (!selectedProduct) {
      res.status(404).json({ message: "The requested product is not found" });
    }
    await selectedProduct.deleteOne();
    res
      .status(200)
      .json({ message: `Deletion successful for id:${req.params.id}` });
  } catch (err) {
    console.log(err);
  }
  // console.log(req.params);
  // res.status(200).send({ message: `delete product for id:${req.params.id}` });
};

exports.putProductById = async (req, res) => {
  try {
    const { title, price, description, category, image } = req.body;

    if (!title || !price || !description || !category || !image) {
      throw new Error("All update fields are required");
    }

    const updatedData = await product.findByIdAndUpdate(
      req.params.id,
      { title, price, description, category, image },
      { new: true }
    );

    if (!updatedData) {
      res.status(404).json({ message: "Requested product not found" });
    }

    res.status(200).json(edData);
  } catch (err) {
    console.log(err.message);
  }
};
