import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject } from '@ember/service';


export default class extends Controller {
  @inject
  session;

  @action
  async signIn(event) {
    event.preventDefault();
    let { email, password } = this;
    await this.session.authenticate('authenticator:credentials', email, password);
    await this.transitionToRoute('bands');
  }

}
