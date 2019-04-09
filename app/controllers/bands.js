import Controller from '@ember/controller';
import { action } from '@ember/object';
import Band from 'rarwe/models/bands';
import { empty } from '@ember/object/computed';

export default class BandsController extends Controller {
  isAddingBand = false;
  newBandName = '';

  @empty('newBandName')
  isAddButtonDisabled = true;

  @action
  addBand() {
    this.set('isAddingBand', true);
  }

  @action
  saveBand(event) {
    event.preventDefault();
    const newBand = new Band(this.newBandName);
    this.model.bands.pushObject(newBand);
    this.setProperties({ newBandName: '', isAddingBand: false });
    this.transitionToRoute('bands.band.songs', newBand.slug);
  }

  @action
  cancelAddBand() {
    this.set('isAddingBand', false);
  }
}
