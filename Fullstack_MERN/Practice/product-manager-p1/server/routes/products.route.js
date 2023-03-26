// import the controller
const Product = require("../controllers/products.controller")

// ! ALWAYS TEST ALL ROUTES
// ! W/ VALIDATION
// ! BEFORE YOU EVER TOUCH THE CLIENT (REACT)

module.exports = (app) => {
    app.get("/api/products", Product.findAll)
    app.post("/api/products", Product.create)
}