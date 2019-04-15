import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class SongsRoute extends Route {
  model() {
    const band = this.modelFor('bands.band').band;
    return {
      songs: band.songs,
      band: band.name,
    }
  }

  resetController(controller) {
    controller.setProperties({
      isAddingSong: false,
      newSongTitle: '',
    });
  }

  @action
  didTransition() {
    let bandName = this.modelFor(this.routeName).band;
    document.title = `${bandName} Songs - Rock & Roll`;
  }
}
