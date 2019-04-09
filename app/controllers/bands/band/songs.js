import Controller from '@ember/controller';
import Song from 'rarwe/models/songs';
import { action } from '@ember/object';
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
  saveSong(event) {
    event.preventDefault();
    this.model.songs.pushObject(new Song(this.newSongName, this.model.band));
    this.set('newSongName', '');
  }

  @action
  cancelAddSong() {
    this.set('isAddingSong', false);
  }
}
