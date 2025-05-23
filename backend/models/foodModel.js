const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    name: String,
    nutrients: {
        calories: Number,
        protein: Number,
        fat: Number,
        carbs: Number
    },
    vegetarianAlternative: {
        name: String,
        nutrients: {
            calories: Number,
            protein: Number,
            fat: Number,
            carbs: Number
        }
    },
    healthBenefits: String,
    ingredients: [String],
    cookingMethod: [String]
});

module.exports = mongoose.model("Food", foodSchema); // ✅ Correct collection name