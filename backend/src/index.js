import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import connectDB from "./config/mongo.config.js";
import short_url from "./routes/shortUrl.routes.js";
import cors from "cors";
import { erroHandler } from "./utils/errorHandler.js";
import auth_routes from "./routes/auth.routes.js";
import users_routes from "./routes/users.routes.js";
import { attachUser } from "./utils/attachUser.js";
import { redirectFromShortUrl } from "./controllers/shorturl.controllers.js";
dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

connectDB()
.then(() => {
    console.log("MongoDB connected");
})
.catch((error) => {
    console.log(error);
}); 

app.use(attachUser);

app.use("/api/user",users_routes);
app.use("/api/auth",auth_routes);
app.use("/api/create",short_url);
app.use("/:id", redirectFromShortUrl)
app.use(erroHandler)


app.listen(3000, () => {
    console.log("Server is running on port 3000");
}); 

