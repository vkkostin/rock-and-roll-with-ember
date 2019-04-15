import { dasherize } from '@ember/string';
import { computed } from '@ember/object';

export default class Band {
  constructor(name = '', songs = [], description = '') {
    this.name = name;
    this.songs = songs;
    this.description = description;
  }

  @computed('name')
  get slug() {
    return dasherize(this.name);
  }
}