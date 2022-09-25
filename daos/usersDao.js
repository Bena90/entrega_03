import User from '../models/UserSchema.js';

const createUser = async (user) => {
    try {
        const newUser = new User(user)
        const userCreated = await newUser.save();
        return userCreated   
    } catch (error) {
        console.log(error)
    }
}

const getUserById = async (id) => {
    const user = await User.findById(id)
    if (!user) return 'User not found'
    return user
}

const checkUser = async (email) => {

    const user = await User.findOne({ email })
    if (user){

        return user
    } else {

        return false
    }
}

export const userDao = {
    checkUser,
    createUser,
    getUserById,
}