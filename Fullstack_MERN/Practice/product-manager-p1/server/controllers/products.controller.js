// === CRUD ===
// import the model to make the queries to the DB
const Product = require("../models/products.model")

module.exports = {
    // Read All
    findAll: (req, res) => {
        Product.find()
            .then(allProducts => res.json(allProducts))
            .catch(err => res.json(err))
    },
    // CREATE
    create: (req, res) => {
        Product.create(req.body)
            .then(newProduct => {
                console.log("Product created successfully!");
                res.json(newProduct)
            })
            .catch(err => res.json(err))
    }

}