// backend/server.js
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 3000;
const validCircleCodes = ["abc123", "friends2025"];

app.use(cors());
app.use(express.json());

let posts = []; // temporary in-memory (or use DB later)

app.post('/api/post', (req, res) => {
  const { username, content, circlecode } = req.body;
  const post = { username, content, circlecode, timestamp: Date.now() };
  posts.push(post);
  res.send({ success: true });
});

app.get('/api/feed/:circlecode', (req, res) => {
  const code = req.params.circlecode;
  res.send(posts.filter(p => p.circlecode === code));
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
