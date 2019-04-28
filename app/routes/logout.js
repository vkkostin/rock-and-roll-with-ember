import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default class extends Route {
  @inject
  session;

  beforeModel() {
    this.session.invalidate();
    this.transitionTo('login');
  }
}
