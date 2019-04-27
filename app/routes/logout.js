import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import { get } from '@ember/object';

export default class extends Route {
  @inject
  session;

  beforeModel() {
    get(this, 'session').invalidate();
    // this.session.invalidate();
    this.transitionTo('login');
  }
}
