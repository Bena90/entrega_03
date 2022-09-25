import logger from '../loggers/logger.js'

const checkAuth = async (req, res, next) => {
    console.log('CheckAuth')
    next();
}

export default checkAuth;