// foodController.js

// Updated vegetarian alternatives database
const vegAlternatives = {
  chicken: {
    vegetarianAlternative: "Lentil & Mushroom Masala",
    nutritionalInfo: {
      protein: 20, // grams
      calories: 180, // kcal
      fat: 2 // grams
    }
  },
  fish: {
    vegetarianAlternative: "Tofu & Seaweed Curry",
    nutritionalInfo: {
      protein: 22,
      calories: 160,
      fat: 4
    }
  },
  egg: {
    vegetarianAlternative: "Chickpea Omelette",
    nutritionalInfo: {
      protein: 15,
      calories: 150,
      fat: 3
    }
  },
  paneer: {
    vegetarianAlternative: "Smoked Tofu",
    nutritionalInfo: {
      protein: 23,
      calories: 200,
      fat: 5
    }
  }
};

// Function to find matching vegetarian alternatives
const findMatchingVegetarianAlternative = (scannedNutrition) => {
  const tolerance = {
    protein: 5, // Allowable difference in grams
    calories: 50, // Allowable difference in kcal
    fat: 2 // Allowable difference in grams
  };

  return Object.values(vegAlternatives).find(vegFood => {
    const vegNutrition = vegFood.nutritionalInfo;
    return (
      Math.abs(vegNutrition.protein - scannedNutrition.protein) <= tolerance.protein &&
      Math.abs(vegNutrition.calories - scannedNutrition.calories) <= tolerance.calories &&
      Math.abs(vegNutrition.fat - scannedNutrition.fat) <= tolerance.fat
    );
  });
};

// Exported function
exports.getFoodWithAlternative = (req, res) => {
  const { detectedItem } = req.body;
  const scannedFood = vegAlternatives[detectedItem?.toLowerCase()];

  if (!scannedFood) {
    res.status(404).json({ message: "Scanned food not found in the database." });
    return;
  }

  const matchingVegetarianAlternative = findMatchingVegetarianAlternative(scannedFood.nutritionalInfo);

  if (matchingVegetarianAlternative) {
    res.json({
      scannedFood: detectedItem,
      nutritionalInfo: scannedFood.nutritionalInfo,
      vegetarianAlternative: matchingVegetarianAlternative.vegetarianAlternative,
      matchingNutritionalInfo: matchingVegetarianAlternative.nutritionalInfo
    });
  } else {
    res.status(404).json({ message: "No vegetarian alternative with similar nutrition found." });
  }
};