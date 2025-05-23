const express = require('express');
const app = express();
const PORT = 3000;

const foodData = {
  chicken: {
    name: "chicken",
    type: "non-veg",
    nutrients: {
      protein: "27g per 100g. Rich source of complete protein.",
      calories: "239 kcal per 100g. Provides energy with fewer carbs.",
      fat: "14g total fat. Contains both saturated and unsaturated fats."
    },
    benefits: {
      health: "Supports muscle growth and strengthens bones.",
      energy: "Packed with high-quality protein to fuel your body.",
      wellness: "Provides B vitamins for mood and nerve health."
    },
    veg_alternative: {
      name: "Tofu Stir-Fry",
      nutrients: {
        protein: "20g per 100g. A great plant-based protein source.",
        calories: "144 kcal per 100g. Low in calories but nutritionally dense.",
        fat: "9g total fat. Mostly unsaturated fats which are heart-friendly."
      },
      benefits: {
        health: "Strengthens bones and improves heart health.",
        energy: "Delivers steady plant-based energy.",
        wellness: "Supports weight loss and hormonal balance."
      },
      ingredients: [
        "100g tofu (firm, cubed)",
        "1 tbsp soy sauce",
        "1 tsp sesame oil",
        "1/2 tsp ginger (grated)",
        "1 garlic clove (minced)",
        "1/2 onion (sliced)",
        "1/2 bell pepper (sliced)",
        "1/4 cup broccoli florets",
        "Salt and pepper to taste"
      ],
      cook_method: {
        title: "Step-by-Step Cooking Method for Tofu Stir-Fry",
        steps: [
          "1. Cut the tofu into cubes and pat it dry.",
          "2. Heat 1 tsp sesame oil in a non-stick pan.",
          "3. Cook tofu until golden brown on all sides.",
          "4. Add garlic and ginger, sauté for 30 sec.",
          "5. Add veggies, stir-fry 3–4 min.",
          "6. Add tofu, soy sauce, mix well.",
          "7. Stir everything on low heat 2 min.",
          "8. Serve hot with steamed rice or noodles."
        ]
      }
    }
  }
};

app.get('/food-info', (req, res) => {
  const foodName = req.query.name?.toLowerCase();
  const food = foodData[foodName];
  if (food) {
    res.json(food);
  } else {
    res.status(404).json({ error: "Food not found." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
