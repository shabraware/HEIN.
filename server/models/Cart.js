const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartSchema = new Schema(
  {
    userId: {
      // type: Schema.Types.ObjectId,
      // ref: 'User',
      type: String,
      required: true
    },
    products: [
      {
        productId: {
          // type: Schema.Types.ObjectId,
          // ref: 'Product',
          type: String,
        },
        quantity: {
          type: Number,
          default: 1
        }
      }
    ]
  }, {
  timestamps: true
}
);

module.exports = mongoose.model('Cart', cartSchema);