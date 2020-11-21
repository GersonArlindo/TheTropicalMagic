const { Schema, model } = require('mongoose');

const OrderSchema = new Schema({
    idCliente: String,
    title: String,
    cantidad: Number
});
module.exports = model('Orders', OrderSchema);