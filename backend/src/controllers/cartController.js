const Cart = require('../models/Cart');
const Product = require('../models/Product');

const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.user.id;

  const product = await Product.findById(productId);
  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }

  let cart = await Cart.findOne({ user: userId });
  if (cart) {
    const itemIndex = cart.items.findIndex(p => p.product.toString() === productId);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity });
    }
    await cart.save();
    res.json(cart);
  } else {
    const newCart = await Cart.create({
      user: userId,
      items: [{ product: productId, quantity }]
    });
    res.status(201).json(newCart);
  }
};

const updateCartItem = async (req, res) => {
  const productId = req.params.id;
  const { quantity } = req.body;
  const userId = req.user.id;
  const cart = await Cart.findOne({ user: userId });

  if (!cart) {
    res.status(404);
    throw new Error('Cart not found');
  }

  const itemIndex = cart.items.findIndex(p => p.product.toString() === productId);
  if (itemIndex > -1) {
    if (quantity > 0) {
      cart.items[itemIndex].quantity = quantity;
    } else {
      cart.items.splice(itemIndex, 1);
    }
    await cart.save();
    res.json(cart);
  } else {
    res.status(404);
    throw new Error('Product not found in cart');
  }
};

const removeFromCart = async (req, res) => {
  const productId = req.params.id;
  const userId = req.user.id;
  const cart = await Cart.findOne({ user: userId });

  if (!cart) {
    res.status(404);
    throw new Error('Cart not found');
  }

  cart.items = cart.items.filter(p => p.product.toString() !== productId);
  await cart.save();
  res.json(cart);
};

const getCart = async (req, res) => {
    const userId = req.user.id;
    const cart = await Cart.findOne({ user: userId }).populate('items.product');
    if(!cart) return res.json({ items: [] });
    res.json(cart);
}

module.exports = { addToCart, updateCartItem, removeFromCart, getCart };