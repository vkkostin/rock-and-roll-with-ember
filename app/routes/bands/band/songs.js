import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class extends Route {
  model() {
    return this.modelFor('bands.band');
  }

  resetController(controller) {
    controller.setProperties({
      isAddingSong: false,
      newSongTitle: '',
    });
  }

  @action
  didTransition() {
    let band = this.modelFor(this.routeName);
    document.title = `${band.name} Songs - Rock & Roll`;
  }
}
