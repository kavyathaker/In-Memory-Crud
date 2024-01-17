const products = require('../data');

const getProducts = (req, res) => {
    try {
        const newProducts = products.map((product) => {
            const { id, name, price, desc } = product
            return { id, name, price, desc };
        })
        res.json(newProducts)

    } catch (error) {
        console.log('error')
    }
}

const getProductByID = (req, res) => {
    console.log('reachedded')
    const itemId = Number(req.params.id);

    const item = products.find(item => item.id === itemId);
    console.log(item)
    if (item) {
        res.json(item);
    } else {
        res.json({ message: `item ${itemId} doesn't exist` })
    }
}

module.exports = { getProducts, getProductByID };