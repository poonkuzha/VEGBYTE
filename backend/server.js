require('dotenv').config(); // ✅ Load environment variables
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Food = require('./models/foodModel');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Establish MongoDB Connection
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/veggies", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB connected successfully"))
.catch(error => console.error("❌ MongoDB connection error:", error));

mongoose.connection.once("open", () => {
    console.log("💾 Connected to MongoDB: veggies.foods collection");
});
mongoose.connection.on("error", (error) => {
    console.error("❌ MongoDB connection failed:", error);
});

// ✅ Default Route to Prevent Errors
app.get('/', (req, res) => {
    res.send("🚀 Backend is running! Use `/foods/:name` to fetch food details.");
});

// ✅ API Route to Fetch Food Details from `foods` Collection
app.get('/foods/:name', async (req, res) => {
    try {
        const foodName = req.params.name.trim();
        console.log(`🔍 Searching for food in 'foods' collection: ${foodName}`);

        // 🔄 Case-Insensitive Search in 'foods' Collection
        const food = await mongoose.connection.collection("foods").findOne({ name: new RegExp(`^${foodName}$`, "i") });

        if (!food) {
            console.error(`❌ Food not found in database: ${foodName}`);
            return res.status(404).json({ message: "Food not found in database." });
        }

        res.json(food);
    } catch (error) {
        console.error("❌ Error retrieving food:", error.message);
        res.status(500).json({ message: `Server error: ${error.message}` });
    }
});

// ✅ Start the Express Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Backend running on http://localhost:${PORT}`);
});