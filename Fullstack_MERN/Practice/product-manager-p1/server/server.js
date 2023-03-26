const express = require("express")
const cors = require("cors")
const app = express()
const PORT = 8000
const DB = "pm1_db"

// Middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true }),
    express.json(), express.urlencoded({ extended: true }));

// Connect to DB
require("./config/mongoose.config")(DB)

// Connect routes
require("./routes/products.route")(app)

// START THE SERVER
app.listen(PORT, () => console.log(`>> SERVER up on PORT ${PORT} <<`))

