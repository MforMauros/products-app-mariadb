const productService = require('../services/product.service');

exports.findAll = async (req, res) => {
    console.log("Find all Products");

    try {
        const result = await productService.findAll();
        res.status(200).json({ data: result });
        console.log("Success in reading products");
    } catch (error) {
        res.status(404).json({ data: error });
        console.log("Problem in reading products", error);
    }
};

exports.findOne = async (req, res) => {
    const id = req.params.id;
    console.log("Find a Product");

    try {
        const result = await productService.findOne(id);
        res.status(200).json({ data: result });
        console.log("Success in reading product");
    } catch (error) {
        res.status(404).json({ data: error });
        console.log("Problem in reading product", error);
    }
};

exports.create = async (req, res) => {
    const data = req.body;
    console.log("Insert new Product");

    try {
        const result = await productService.create(data);
        res.status(200).json({ data: result });
        console.log("Success in creating product");
    } catch (error) {
        res.status(404).json({ data: error });
        console.log("Problem in creating product", error);
    }
};

exports.update = async (req, res) => {
    const id = req.params.id;
    console.log("Update Product with id:", id);

    try {
        const result = await productService.update(id, req.body);
        res.status(200).json({ data: result });
        console.log("Success in updating product");
    } catch (error) {
        res.status(404).json({ data: error });
        console.log("Problem in updating product", error);
    }
};

exports.delete = async (req, res) => {
    const id = req.params.id;
    console.log("Delete Product with id:", id);

    try {
        const result = await productService.deleteProduct(id);
        res.status(200).json({ data: result });
        console.log("Success in deleting product");
    } catch (error) {
        res.status(404).json({ data: error });
        console.log("Problem in deleting product", error);
    }
};
