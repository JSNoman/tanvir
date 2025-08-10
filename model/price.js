
let mongoose = require('../config/mysql');
let priceSchema = new mongoose.Schema({
    text: String,
    number: String,
});

let price = mongoose.model("Price" , priceSchema);
module.exports = price;