const cv = require('opencv4nodejs');

exports.detectFood = async (imagePath) => {
  try {
    console.log("Processing image:", imagePath);

    const image = cv.imread(imagePath);
    const grayImage = image.cvtColor(cv.COLOR_BGR2GRAY);
    const edges = grayImage.canny(50, 150);

    console.log("Image processed successfully!");
    return "Food detected (basic image processing)";
  } catch (error) {
    console.error("Error detecting food:", error);
    return null;
  }
};

// C:\opencv\build\x64\vc16\bin
// C:\opencv\build\x64\vc16\lib

