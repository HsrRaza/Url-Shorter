import { ValidationError } from "../utils/errorHandler.js";
import { wrapAsync } from "../utils/tryCatch.js";
import { loginUserService, registerUserService } from "../services/auth.service.js";
import { cookieOptions } from "../config/config.js";


export const register_user = wrapAsync(async (req, res) => {

    const { name, email, password } = req.body;

    console.log(req.body);

    if (!name || !email || !password) {
        throw new ValidationError("All fields are required");
    }
    const { token, newUser } = await registerUserService(name, email, password);

    req.user = newUser

    res.cookie("accessToken", token, cookieOptions);

    res.status(201).json({
        success: true,
        message: "register SuccessFull",
        user: newUser,
        token: token,
    })

});

export const login_user = wrapAsync(async (req, res) => {
    // console.log(req.body);
    const { email, password } = req.body;
    if (!email || !password) {
        throw new ValidationError("All fields are required");
    }

    const { token, user } = await loginUserService(email, password);
    req.user = user
    // console.log(user);

    res.cookie("accessToken", token, cookieOptions);

    res.status(200).json({
        success: true,
        message: "Login SuccessFull",
        user: user,
        token: token
    })
})

export const logout_user = wrapAsync(async (req, res) => {
    res.status(200).json({
        success: true,
        message: "Logout SuccessFull",
    })
})

export const get_current_user = wrapAsync(async (req, res) => {
    res.status(200).json({
        success: true,
        message: "User fetched successfully",
        user: req.user
    })
})