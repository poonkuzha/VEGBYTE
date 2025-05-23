// backend/app.js
const express = require('express');
const app = express();
const foodRoutes = require('./routes/foodroutes');

app.use(express.json());
app.use('/api', foodRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

