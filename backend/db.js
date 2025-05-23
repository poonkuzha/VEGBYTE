const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/veggies", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("✅ Connected to MongoDB successfully!");
}).catch((error) => {
    console.error("❌ MongoDB connection error:", error);
});

module.exports = mongoose;