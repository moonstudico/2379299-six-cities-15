import { ChangeEvent, FormEvent, Fragment, useEffect, useState } from 'react';
import { saveReviewAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hock';
import { MAX_LENGHT, MIN_LENGHT, STARS } from '../../const';

type Props = {
  id: string | undefined;
}

function Form({id}: Props): JSX.Element {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState<number>();
  const dispatch = useAppDispatch();
  const reviewSuccess = useAppSelector((state) => state.user.reviewSuccess);
  const loading = useAppSelector((state) => state.user.loading);

  useEffect(() => {
    if (reviewSuccess) {
      setComment('');
      setRating(undefined);
    }
  }, [reviewSuccess]);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (rating && id && rating !== 0) {
      dispatch(saveReviewAction({
        comment: comment,
        id: id,
        rating: rating
      }));
    }
  };

  const handleCommentChange = (evt : ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = evt.target;
    setComment(value);
  };

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  return(
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating" >
        {

          STARS.map(({label, value}) => (
            <Fragment key={value}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                id={`${value}-stars`}
                value={value}
                type="radio"
                onChange={() => handleRatingChange(value)}
                checked={value === rating}
                disabled={loading}


              />
              <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={`${label}`}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          ))
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleCommentChange}
        value={comment}
        disabled={loading}
        maxLength={MAX_LENGHT}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!rating || rating === 0 || comment.length <= MIN_LENGHT || comment.length >= MAX_LENGHT} >Submit</button>
      </div>
    </form>
  );
}

export default Form;
