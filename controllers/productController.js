const Product = require("../models/product");

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "No encontrado" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProductsByName = async (req, res) => {
  try {
    if (req.params.name.length > 20) {
      return res.status(400).send("Búsqueda demasiado larga");
    }
    const name = new RegExp(req.params.name, "i");
    const products = await Product.find({
      $text: {
        $search: req.params.name,
      },
    });

    res.send(products);
  } catch (error) {
    console.log(error);
  }
},
exports.updateProduct = async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!product) return res.status(404).json({ message: "No encontrado" });
      res.json(product);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "No encontrado" });
    res.json({ message: "Producto eliminado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
