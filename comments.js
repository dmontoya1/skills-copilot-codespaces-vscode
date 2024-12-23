// Create web server

import express from "express";
import { getComments, addComment } from "./comments.js";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/comments", (req, res) => {
  res.send(getComments());
});

app.post("/comments", (req, res) => {
  const { author, content } = req.body;
  addComment(author, content);
  res.status(201).send("Comment added");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

// Run the server with node comments.js
// Test it with curl:
// curl -X GET http://localhost:3000/comments
// curl -X POST -H "Content-Type: application/json" -d '{"author": "Alice", "content": "I love Node.js"}' http://localhost:3000/comments