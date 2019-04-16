import DS from 'ember-data';
import { computed } from '@ember/object';

const { Model, attr, hasMany } = DS;

export default class Band extends Model {
  @attr('string', )
  name;

  @attr('string', { defaultValue: '' })
  description;

  @hasMany('song')
  songs;

  @computed('songs.@each.rating')
  get isGreatBand() {
    let goodSongs = this.songs.filter(song => song.rating >= 4);
    return goodSongs.length >= 2;
  }
}