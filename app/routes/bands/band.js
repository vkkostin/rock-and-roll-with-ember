import Route from '@ember/routing/route';

export default class BandsBandRoute extends Route {
  model(params) {
    const bandsModel = this.modelFor('bands');
    return {
      band: bandsModel.bands.findBy('slug', params.slug)
    };
  }
}
