import Component from '@ember/component';
import { computed, action } from '@ember/object';

export default class StarRatingComponent extends Component {
  classNames = ['rating-panel'];
  rating = 0;
  maxRating = 5;
  onClick() {}

  @computed('rating', 'maxRating')
  get stars() {
    let stars = [];
    for (let i = 1; i <= this.maxRating; i ++) {
      stars.push({
        rating: i,
        isFull: this.rating >= i,
      });
    }
    return stars;
  }

  @action
  setRating(newRating) {
    return this.onClick(newRating);
  }
}
