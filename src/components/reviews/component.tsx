import { TReviews } from '../../constants/mocks-interface.ts';

interface Props {
  reviews: TReviews;
}

export const Reviews = ({ reviews }: Props) => {
  return (
    <div>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>{review.text}</li>
        ))}
      </ul>
    </div>
  );
};
