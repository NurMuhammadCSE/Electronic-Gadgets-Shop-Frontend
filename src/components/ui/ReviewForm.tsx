import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store"; // Adjust this to your store location

interface ReviewFormProps {
  productId: string;
  onReviewSubmit: (review: string, rating: number) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({
  productId,
  onReviewSubmit,
}) => {
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState<number>(5); // Default rating

  const { user } = useSelector((state: RootState) => state.user);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert("You must be logged in to submit a review.");
      return;
    }
    onReviewSubmit(reviewText, rating);
    setReviewText("");
  };

  return (
    <div className="my-6">
      <h2 className="text-2xl font-semibold mb-4">Leave a Review</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full p-2 border rounded mb-4"
          placeholder="Write your review here"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        <div className="mb-4">
          <label className="block mb-2">Rating:</label>
          <select
            className="border p-2"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          >
            {[5, 4, 3, 2, 1].map((star) => (
              <option key={star} value={star}>
                {star} Stars
              </option>
            ))}
          </select>
        </div>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          type="submit"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
