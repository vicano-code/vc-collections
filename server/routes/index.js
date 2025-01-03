import express from 'express';
import ProductsController from '../controllers/ProductsController.js';
import AuthController from '../controllers/AuthController.js';
import UsersController from '../controllers/UsersController.js';
import CheckoutController from '../controllers/CheckoutController.js';

const router = express.Router();

// Define routes
router.get ('/products', ProductsController.getAllProducts);
router.get ('/products/:id', ProductsController.getProductById);
router.post ('/products/create', ProductsController.createProduct);

router.post('/users/login', AuthController.loginUser);
router.post('/users/register', AuthController.addNewUser);

router.post('/cart/checkout', CheckoutController.checkoutSession);
router.post('/webhook', CheckoutController.processWebhookEvents);

router.get('/users', UsersController.getAllUsers);
router.post('/admin/login', UsersController.loginAdmin);

export default router;
