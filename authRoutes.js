
const express = require('express');
const authController = require('../controllers/authController');
const { check } = require('express-validator');
const validateRequest = require('../middleware/validateRequest');

const router = express.Router();

// Register a new user
router.post(
  '/register',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 8 or more characters').isLength({ min: 8 }),
  ],
  validateRequest,
  authController.register
);

// Authenticate and login
router.post('/login', authController.login);

module.exports = router;
