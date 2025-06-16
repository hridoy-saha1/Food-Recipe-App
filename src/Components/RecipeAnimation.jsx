
import React from "react";
import Lottie from "lottie-react";
import cookingAnimation from "../assets/Animation/Cooking.json"

const RecipeAnimation = () => {
  return (
    <div className="max-w-md mx-auto">
      <Lottie animationData={cookingAnimation} loop={true} />
    </div>
  );
};

export default RecipeAnimation;
