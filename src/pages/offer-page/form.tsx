import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { saveReviewAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hock';
import { MAX_LENGHT, MIN_LENGHT } from '../../const';

type Props = {
  id: string | undefined;
}

function Form({id}: Props): JSX.Element {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState<number>();
  const dispatch = useAppDispatch();
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (id && rating) {
      dispatch(saveReviewAction({
        comment: comment,
        id: id,
        rating: rating
      }));
    }
    setComment('');
    setRating(undefined);
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

          [5,4,3,2,1].map((item) => (
            <Fragment key={item}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                id={`${item}-stars`}
                type="radio"
                onChange={() => handleRatingChange(item)}
                checked={rating === item}
              />
              <label htmlFor={`${item}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
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
        maxLength={MAX_LENGHT}
        minLength={MIN_LENGHT}
        value={comment}

      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!(rating && rating > 0)} >Submit</button>
      </div>
    </form>
  );
}

export default Form;
