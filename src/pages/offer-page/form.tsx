import { ChangeEvent, Fragment, useState } from 'react';

function Form () : JSX.Element {
  const [comment, setCommet] = useState('');
  const [rating, setRating] = useState<number>();

  const handleCommentChange = (evt : ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = evt.target;
    setCommet(value);
  };

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  return(
    <form className="reviews__form form" action="#" method="post">
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
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled >Submit</button>
      </div>
    </form>
  );
}

export default Form;
