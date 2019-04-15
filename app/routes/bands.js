import Route from '@ember/routing/route';
import { A } from '@ember/array';
import Band from 'rarwe/models/bands';
import Song from 'rarwe/models/songs';
import { action } from '@ember/object';

export default class BandsRoute extends Route {
  model() {
    let blackDog = new Song('Black Dog', 'Led Zeppelin', 3);
    let yellowLedbetter = new Song('Yellow Ledbetter', 'Pearl Jam', 4);
    let pretender = new Song('The Pretender', 'Foo Fighers', 2);
    let streetSpirit = new Song('Street Spirit', 'Radiohead', 5);
    let daughter = new Song('Daughter', 'Pearl Jam', 5);


    let ledZeppelin = new Band('Led Zeppelin', A([blackDog]));
    let pearlJam = new Band('Pearl Jam', A([yellowLedbetter, daughter]), 'Pearl Jam is an American rock band, formed in Seattle, Washington in 1990.');
    let fooFighters = new Band('Foo Fighters', A([pretender]));
    let radiohead = new Band('Radiohead', A([streetSpirit]));

    return {
      bands: A([ledZeppelin, pearlJam, fooFighters, radiohead]) 
    }
  }

  @action
  didTransition() {
    document.title = 'Bands - Rock & Roll';
  }
}
