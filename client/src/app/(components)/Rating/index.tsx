import { Star } from "lucide-react";

type RatingProps = {
  rating: number;
};

const Rating = ({ rating }: RatingProps) => {
  return [1, 2, 3, 4, 5].map((star) => (
    <Star
      key={star}
      color={star <= rating ? "#FFC107" : "#E4E5E9"}
      className="w-4 h-4 "
    />
  ));
};

export default Rating;
