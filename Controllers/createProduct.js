const products = require('../data')

const postProducts = (req,res) =>{
    try{
    products.push(req.body);
    res.status(200).send({success:true, data: products})
    }catch{
        res.status(500).send({success:false, message: "Internal Server Error"})
    }
}

module.exports = postProducts