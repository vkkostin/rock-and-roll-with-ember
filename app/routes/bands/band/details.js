import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class DetailsRoute extends Route {
  model() {
    const bandModel = this.modelFor('bands.band');
    return {
      description: bandModel.band.description
    }
  }

  resetController(controller) {
    controller.set('isEditing', false);
  }

  @action
  willTransition(transition) {
    if (this.controller.isEditing) {
      let leave = window.confirm('Are you sure?');
      if (!leave) {
        transition.abort();
      }
    }
  }
}
