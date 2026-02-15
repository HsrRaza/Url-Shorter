
// import bcrypt from "bcrypt";
import { findUserByEmail, createUser } from "../dao/user.dao.js";
import { signToken } from "../utils/helper.js";
import { ConflictError, NotFoundError, ValidationError } from "../utils/errorHandler.js";


export const registerUserService = async (name, email, password) => {
    const user = await findUserByEmail(email);

    if (user) throw new ConflictError("User already exists");


    const newUser = await createUser(name, email, password);

    const token = signToken({ id: newUser._id });

    return { token, user };
}

export const loginUserService = async (email, password) => {
    const user = await findUserByEmail(email);

    if (!user) throw new NotFoundError("User not found");



    // const isPasswordValid = await user.comparePassword(password);
    // if (!isPasswordValid) throw new UnauthorizedError("Invalid credentials");

    if (user.password !== password) {
        throw new ValidationError("Invalid credentials");
    }
    const token = signToken({ id: user._id });
    // console.log(token);


    return { token, user };
}