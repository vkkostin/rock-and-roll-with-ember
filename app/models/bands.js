import { dasherize } from '@ember/string';
import { computed } from '@ember/object';

export default class Band {
  constructor(name = '', songs = []) {
    this.name = name;
    this.songs = songs;
  }

  @computed('name')
  get slug() {
    return dasherize(this.name);
  }
}