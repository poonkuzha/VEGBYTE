const mongoose = require("mongoose");
const Food = require("./models/foodModel");

mongoose.connect("mongodb://localhost:27017/veggies", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ Connected to MongoDB")).catch(error => console.error("❌ Connection error:", error));

Food.findOne({ name: "Vada" }).then(food => {
    console.log("✅ Found food:", food);
    mongoose.connection.close();
}).catch(error => console.error("❌ Error:", error));