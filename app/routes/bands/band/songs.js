import Route from '@ember/routing/route';

export default class SongsRoute extends Route {
  model() {
    const band = this.modelFor('bands.band').band;
    return {
      songs: band.songs,
      band: band.name,
    }
  }
}
