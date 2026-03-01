import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import connectDB from "./src/config/mongo.config.js";
import short_url from "./src/routes/shortUrl.routes.js";
import cors from "cors";
import { erroHandler } from "./src/utils/errorHandler.js";
import auth_routes from "./src/routes/auth.routes.js";
import users_routes from "./src/routes/users.routes.js";
import { attachUser } from "./src/utils/attachUser.js";
import { redirectFromShortUrl } from "./src/controllers/shorturl.controllers.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

const allowedOrigins = [
  "http://localhost:5173",
  "https://tinytrek.onrender.com"
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(attachUser);

app.use("/api/user", users_routes);
app.use("/api/auth", auth_routes);
app.use("/api/create", short_url);

app.use("/:id", redirectFromShortUrl)

app.use(erroHandler)
const startServer = async () => {
    try {
        await connectDB();
        console.log("MongoDB connected");

        app.listen(port, () => {
            console.log(`Server is running on port ${port} `);
        });
    } catch (error) {
        console.log("Failed to start server:", error);
    }
};

startServer();
