import express from "express";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import testRoute from "./routes/test.route.js";
import postRoute from "./routes/post.route.js";
import userRoute from "./routes/user.route.js";
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";
import path from "path";
const app = express();
const port = 3000;

// app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.json());
app.use(cookieParser());
app.use(cors(
    {origin: ["http://localhost:5173"],
    credentials: true,}
))
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
//   });

app.use("/api/auth", authRouter);
app.use("/api/posts", postRoute);
app.use("/api/test", testRoute);
app.use("/api/users", userRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

app.listen(port, () => {
    console.log("Server running on Port", port);
});