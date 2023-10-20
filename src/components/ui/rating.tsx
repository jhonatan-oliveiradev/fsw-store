"use client";

import { useState } from "react";
import { StarIcon } from "lucide-react";

interface RatingProps {
  initialRating: number;
  maxRating: number;
  onRatingChange: (newRating: number) => void;
}

const Rating: React.FC<RatingProps> = ({
  initialRating,
  maxRating,
  onRatingChange,
}) => {
  const [rating, setRating] = useState(initialRating);

  const handleStarClick = (starIndex: number) => {
    setRating(starIndex + 1);
    onRatingChange(starIndex + 1);
  };

  return (
    <div className="flex items-center gap-1">
      {[...Array(maxRating)].map((_, index) => (
        <StarIcon
          key={index}
          className={`h-5 w-5 ${
            index < rating ? "text-primary" : "text-gray-300"
          } cursor-pointer`}
          onClick={() => handleStarClick(index)}
        />
      ))}
    </div>
  );
};

export default Rating;
