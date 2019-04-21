import Controller from '@ember/controller';
import { action, set, computed } from '@ember/object';
import { empty, sort } from '@ember/object/computed';
import { capitalize } from 'rarwe/helpers/capitalize';

export default class SongsController extends Controller {
  isAddingSong = false;
  newSongName = '';
  sortBy = 'ratingDesc';
  searchTerm = '';

  queryParams = ['sortBy', 'searchTerm'];

  @computed('model.songs.@each.title', 'searchTerm')
  get matchingSongs() {
    let searchTerm = this.searchTerm.toLowerCase(); 
    return this.model.get('songs').filter((song) => {
      return song.title.toLowerCase().includes(searchTerm); 
    });
  }

  @computed('sortBy')
  get sortProperties() {
    let options = {
      ratingDesc: ['rating:desc', 'title:asc'],
      ratingAsc:  ['rating:asc', 'title:asc'],
      titleDesc:  ['title:desc'],
      titleAsc:   ['title:asc'],
    }
    return options[this.sortBy];
  }

  @computed('model.name')
  get newSongPlaceholder() {
    return `New ${capitalize(this.model.name)} song`;
  }

  @sort('matchingSongs', 'sortProperties')
  sortedSongs = null;

  @empty('newSongName')
  isAddButtonDisabled = true;

  @action
  addSong() {
    this.set('isAddingSong', true);
  }

  @action
  async saveSong(event) {
    event.preventDefault();
    let newSong = this.store.createRecord('song', {
      title: this.newSongName,
      band: this.model,
    });
    await newSong.save();
    this.set('newSongName', '');
  }

  @action
  cancelAddSong() {
    this.set('isAddingSong', false);
  }

  @action
  updateRating(song, rating) {
    set(song, 'rating', song.rating === rating ? 0 : rating);
    song.save();
  }
}
