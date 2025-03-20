import express from "express";
import cors from "cors";
import { router as usersRouter } from "./routers/users.router.js";
import { router as postsRouter } from "./routers/posts.router.js";
const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", usersRouter);
app.use("/posts", postsRouter);

app.listen(8000, () => {
  console.log("Server is Listening in port 8000");
});
