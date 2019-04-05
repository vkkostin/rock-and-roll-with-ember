import Route from '@ember/routing/route';
import { A } from '@ember/array';

class Song {
  constructor(title, band, rating) {
    this.title = title;
    this.band = band;
    this.rating = rating;
  }
}

export default class ApplicationRoute extends Route {

  model() {
    let blackDog = new Song('Black Dog', 'Led Zeppelin', 3);
    let yellowLedbetter = new Song('Yellow Ledbetter', 'Pearl Jam', 4);
    let pretender = new Song('The Pretender', 'Foo Fighers', 2);
    let radiohead = new Song('Street Spirit', 'Radiohead', 5);

    return A([blackDog, yellowLedbetter, pretender,radiohead]); 
  }
}
