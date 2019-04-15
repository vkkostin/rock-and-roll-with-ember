import Controller from '@ember/controller';
import { action, set } from '@ember/object';
import { empty } from '@ember/object/computed';

export default class SongsController extends Controller {
  isAddingSong = false;
  newSongName = '';

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
