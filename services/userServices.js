import { userDao } from "../daos/usersDao.js"
import generateJWT from "../utils/generateJWT.js";

const createUser = async (user) => {
    if (!user.email) throw "Email doesn't exist"

    if (await userDao.checkUser(user.email)) throw "User already exist"

    const createdUser = await userDao.createUser(user);
    console.log("Hola", createdUser)
    return createdUser
}

const authenticateUser = async (user) => {
    const {username, password } = user
    console.log (username, password)
    const requestUser = await userDao.checkUser(username)
    console.log(requestUser)
    if (!requestUser) throw "Invalid Credentials"

    if (!await requestUser.checkPassword(user.password)) throw "Invalid Credentials"

    const currentUser = ({
        _id: requestUser._id,
        username: requestUser.username,
        email: requestUser.email,
        firstName: requestUser.firstName,
        lastName: requestUser.lastName,
        token: generateJWT(user._id)
    })

    return currentUser
}

export const userServices = {
    createUser,
    authenticateUser,
}