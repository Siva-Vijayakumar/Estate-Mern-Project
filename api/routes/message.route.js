import express from "express";
import { login, logout, register } from "../controllers/auth.controller.js";
import { addMessage } from "../controllers/message.controller.js";
import {verifyToken} from "../middleware/verifyToken.js"


const router = express.Router();

router.post("/:chatId", verifyToken ,addMessage);


export default router;