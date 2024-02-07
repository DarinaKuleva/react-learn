import { useSelector } from 'react-redux';
import { selectReviewById } from '../../redux/entities/review/selectors.ts';

interface Props {
  reviewId: string;
}

export const Review = ({ reviewId }: Props) => {
  const review = useSelector((state) => selectReviewById(state, reviewId));

  return <div>{review.text}</div>;
};
