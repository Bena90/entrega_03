import {Router} from 'express'
import routerProducts from './routerProducts.js'
import routerCarts from './routerCarts.js'
import routerUser from './routerUser.js'

const router = Router();

router.use('/products', routerProducts)
router.use('/carts', routerCarts)
router.use('/auth', routerUser)

export default router