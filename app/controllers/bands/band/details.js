import Controller from '@ember/controller';
import { action, computed } from '@ember/object';

export default class BandsBandDetailsController extends Controller {
  isEditing = false;


  @computed('_showErrors')
  get showErrors() {
    return this._showErrors || { description: false };
  }

  set showErrors(value) {
    this.set('_showErrors', value); 
    return this._showErrors;
  }


  @action
  edit() {
    this.set('isEditing', true);
  }

  @action
  async save() {
    let band = this.model;
    this.set('showErrors.description', true); 
    if (band.validations.isValid) {
      await band.save();
      this.set('isEditing', false); 
    }
  }
}
