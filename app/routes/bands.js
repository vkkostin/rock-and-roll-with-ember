import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class extends Route {
  model() {
    return this.store.findAll('band')
  }

  @action
  didTransition() {
    document.title = 'Bands - Rock & Roll';
  }
}
