const products = require('../data')

const deleteProducts = (req, res) => {
    try {
        const { id } = req.params;
        const productIndex = products.findIndex((product) => product.id === Number(id)); 

        if (productIndex !== -1) {
            products.splice(productIndex, 1);

            res.status(200).send({ success: true });
        } else {
            res.status(404).send({ success: false, message: "Product not found" });
        }
    } catch (error) {
        res.status(500).send({ success: false, error: error.message });
    }
};


module.exports = deleteProducts;

