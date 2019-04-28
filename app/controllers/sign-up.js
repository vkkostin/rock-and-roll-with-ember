import Controller from '@ember/controller';
import { action, computed } from '@ember/object';
import extractServerError from 'rarwe/utils/extract-server-error';

export default class extends Controller {

  @computed('_baseErrors')
  get baseErrors() {
    return this._baseErrors || [];
  }

  set baseErrors(value) {
    this.set('_baseErrors', value); 
    return this._baseErrors;
  }


  @computed('_showErrors')
  get showErrors() {
    return this._showErrors || { email: false, password: false };
  }

  set showErrors(value) {
    this.set('_showErrors', value);
    return this._showErrors;
  }


  @action
  async signUp(event) {
    event.preventDefault();
    try {
      await this.model.save();
      await this.transitionToRoute('login'); 
    } catch(response) {
      let errorMessage = extractServerError(response.errors);
      this.baseErrors.pushObject(errorMessage);
    }
  }

}
