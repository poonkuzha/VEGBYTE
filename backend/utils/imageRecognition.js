exports.detectFood = async (foodName) => {
    try {
        console.log("Processing food name:", foodName);

        // Sample list of known foods (replace with database lookups)
        const knownFoods = ["apple", "banana", "rice", "dosa", "idli"];
        
        if (knownFoods.includes(foodName.toLowerCase())) {
            console.log("Food detected successfully!");
            return `Food detected: ${foodName}`;
        } else {
            console.log("Food not recognized.");
            return `Unknown food: ${foodName}`;
        }
    } catch (error) {
        console.error("Error detecting food:", error);
        return null;
    }
};