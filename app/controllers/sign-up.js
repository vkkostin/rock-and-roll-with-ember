import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class extends Controller {


  @action
  async signUp(event) {
    event.preventDefault();
    let { email, password } = this;
    let user = this.store.createRecord('user', { email, password });
    await user.save();
    await this.transitionToRoute('login');
  }

}
