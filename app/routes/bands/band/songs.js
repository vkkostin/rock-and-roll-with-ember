import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { capitalize } from 'rarwe/helpers/capitalize';

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
    let name = capitalize(band.name);
    document.title = `${name} songs - Rock & Roll`;
  }
}
