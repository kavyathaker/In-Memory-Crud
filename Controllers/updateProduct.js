const products = require('../data')
const updateProducts = (req, res) => {
    try {
        const id = req.params.id;
        const name = req.body.name;
        const updatedProducts = products.map((product) => {
            if (product.id === Number(id)) {
                product.name = name;
                res.status(200).send({ success: true })
            } else{
                res.status(400).send({success: false, message: "product not found"})
            }
            return product;
        })
    } catch {
        res.status(500).send({ success: false, error: error.message })
    }
}

module.exports = updateProducts;

