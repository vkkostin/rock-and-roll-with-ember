import Route from '@ember/routing/route';

export default class extends Route {
  redirect(model) {
    if (model.description) {
      this.transitionTo('bands.band.details');
    } else {
      this.transitionTo('bands.band.songs');
    }
  }
}
