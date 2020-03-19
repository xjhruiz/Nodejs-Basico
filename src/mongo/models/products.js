const mongoose = require('mongoose');

// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    images: [{ type: String, require: true }],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },
  {
    //para que agregue la fecha en la que se creo el producto o se modifico
    timestamps: true
  }
);

const model = mongoose.model('Product', productSchema);
module.exports = model;
