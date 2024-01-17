const products  = require('../data');

const getProducts = (req,res)=>{
    try {
        const newProducts = products.map((product)=>{
            const {id, name, price, desc} = product
            return {id, name, price, desc};
        })
        res.json(newProducts)

    } catch (error) {
        console.log('error')
    }
}

module.exports = getProducts;