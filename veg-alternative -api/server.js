const express = require('express');
const vegAlternatives = require('./vegAlternatives');

const app = express();
const PORT = 3000;

app.get('/food-info', (req, res) => {
  const name = req.query.name?.toLowerCase();

  if (!name || !vegAlternatives[name]) {
    return res.status(404).json({ error: "Food item not found or not supported." });
  }

  return res.json(vegAlternatives[name]);
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
