import Form from './form';
import { Review } from '../../types/review';
import ReviewsItem from './reviews-item';
import { useAppSelector } from '../../hock';
import { AuthorizationStatus, MAX_COUNT_REVIEWS } from '../../const';
import { memo } from 'react';

type Props = {
  reviews: Review[];
  id: string | undefined;
}

function UserReviewsRew ({reviews, id}: Props): JSX.Element{
  const authorizationStatus = useAppSelector((state) => state.user.authorizationStatus);
  const sortingReviews = [...reviews].sort((a: Review, b: Review) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, MAX_COUNT_REVIEWS);

  return(
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          sortingReviews.map((review) => <ReviewsItem review={review} key = {review.id}/>)
        }
      </ul>
      {
        authorizationStatus === AuthorizationStatus.Auth && <Form id = {id}/>
      }
    </section>
  );
}
const UserReviews = memo(UserReviewsRew);
export default UserReviews;
