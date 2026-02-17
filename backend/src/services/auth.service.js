
// import bcrypt from "bcrypt";
import { findUserByEmail, createUser, findUserByEmailandPassword } from "../dao/user.dao.js";
import { signToken } from "../utils/helper.js";
import { ConflictError, NotFoundError, ValidationError } from "../utils/errorHandler.js";


export const registerUserService = async (name, email, password) => {
    const user = await findUserByEmail(email);

    if (user) throw new ConflictError("User already exists");


    const newUser = await createUser(name, email, password);

    const token = signToken({ id: newUser._id });

    return { token, newUser };
}

export const loginUserService = async (email, password) => {
    const user = await findUserByEmailandPassword(email);

    if (!user) throw new NotFoundError("User not found");

    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) throw new ValidationError("Invalid credentials");
    
    const token = signToken({ id: user._id });


    return { token, user };
}