"use client";

import Rating from "./rating";

const RatedContent = () => {
  const handleRatingChange = (newRating: number) => {
    console.log(`Nova classificação: ${newRating}`);
  };

  return (
    <div className="flex items-center gap-2">
      <Rating
        initialRating={4}
        maxRating={5}
        onRatingChange={handleRatingChange}
      />
      <span className="text-sm text-muted-foreground/50">(25)</span>
    </div>
  );
};

export default RatedContent;
