import Router from 'express'
import checkAuth from '../middleware/checkAuth.js';
import { productsControllers } from '../controllers/index.controllers.js'

const router = Router();

router.route ('/')
    .get(productsControllers.getProducts)
    .post(checkAuth, productsControllers.addProduct)

router.route('/:id')
    .get(checkAuth, productsControllers.getProduct)
    .put(checkAuth, productsControllers.updateProduct)
    .delete(checkAuth, productsControllers.deleteProduct);

export default router;