import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class extends Route {
  model() {
    return this.modelFor('bands.band')
  }

  resetController(controller) {
    controller.set('isEditing', false);
    controller.set('showErrors', null);
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
