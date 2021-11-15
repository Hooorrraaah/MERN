const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/productdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {console.log("DB connected")})
.catch(err => {console.log("DB connection error:", err)});