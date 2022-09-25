import jwt from 'jsonwebtoken';
import User from '../models/UserSchema.js'

const checkAuth = async (req, res, next) => {
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split('Bearer ')[1];
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
            console.log('Decoder Token', decodedToken)
            req.user = await User.findById(decodedToken.id).select('-password -__v');
            console.log("req.user", req.user)
            return next();
        } catch (error) {
            return res.status(404).json({msg: 'Hubo un error'});
        }
    }
    if(!token){
        const error = new Error('Invalid token');
        return res.status(401).json({msg: error.message});
    }
    next();
}

export default checkAuth;