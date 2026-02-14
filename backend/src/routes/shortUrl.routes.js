import express from "express";
import { createShortUrl, redirectFromShortUrl , createCustomUrl} from "../controllers/shorturl.controllers.js";

const router = express.Router();

router.post("/api/create", createShortUrl);
router.get("/:id",redirectFromShortUrl );

router.post("/api/create", createCustomUrl)

export default router;  