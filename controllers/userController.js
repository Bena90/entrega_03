import { userServices } from '../services/index.services.js'

const loginUser = async (req, res) => {
    console.log(req.body)
    try {
        const user = await userServices.authenticateUser(req.body)
        res.json(user)

    } catch (err) {
        console.log(err)
        res.status(401).json({msg:`Something went wrong: ${err}`})
    }
}

const registerUser = async (req, res) => {
    try {
        await userServices.createUser(req.body)
        res.json({msg:'User create succesfully!'})
    } catch (err) {
        console.log(err)
        res.status(400).json({msg: `Something went wrong: ${err}`})       
    }
}

export default{
    loginUser,
    registerUser,
}