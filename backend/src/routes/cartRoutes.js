const express = require('express');
const router = express.Router();
const { addToCart, updateCartItem, removeFromCart, getCart } = require('../controllers/cartController');
const { protect } = require('../middleware/authMiddleware');

const asyncHandler = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

router.use(protect);

router.get('/', asyncHandler(getCart));
router.post('/', asyncHandler(addToCart));
router.put('/:id', asyncHandler(updateCartItem));
router.delete('/:id', asyncHandler(removeFromCart));

module.exports = router;