import Form from './form';
import { Review } from '../../types/review';
import ReviewsItem from './reviews-item';

type Props = {
  reviews: Review[];
}

function UserReviews ({reviews}: Props): JSX.Element{
  return(
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map((review) => <ReviewsItem review={review} key = {review.id}/>)
        }
      </ul>
      <Form />
    </section>
  );
}

export default UserReviews;
