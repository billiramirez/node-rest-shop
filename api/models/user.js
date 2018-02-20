const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: { type: String, required: true},
    password: { type: String, required: true}
});

//Exportamos el modelo, se recomienda utilizar Capitalizacion y le pasamos el esquema creado.
module.exports = mongoose.model('User', userSchema);