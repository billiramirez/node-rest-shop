const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    price: { type: Number, required: true },
    productImage: {type: String, required: true}
});

//Exportamos el modelo, se recomienda utilizar Capitalizacion y le pasamos el esquema creado.
module.exports = mongoose.model('Product', productSchema);