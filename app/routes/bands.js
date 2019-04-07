import Route from '@ember/routing/route';
import { A } from '@ember/array';

class Band {
  constructor(name) {
    this.name = name;
  }
}

export default class BandsRoute extends Route {
  model() {
    let ledZeppelin = new Band('Led Zeppelin');
    let pearlJam = new Band('Pearl Jam');
    let fooFighters = new Band('Foo Fighters');

    return {
      bands: A([ledZeppelin, pearlJam, fooFighters]) }
    }
}
