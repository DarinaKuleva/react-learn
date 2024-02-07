import { Review } from '../review/component.tsx';

interface Props {
  reviewsIds: Array<string>;
}

export const Reviews = ({ reviewsIds }: Props) => {
  return (
    <div>
      <h3>Отзывы</h3>
      <ul>
        {reviewsIds.map((reviewId) => (
          <Review reviewId={reviewId} key={reviewId} />
        ))}
      </ul>
    </div>
  );
};
