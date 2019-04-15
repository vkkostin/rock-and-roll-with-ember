import Controller from '@ember/controller';
import { action } from '@ember/object';
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
  async saveBand(event) {
    event.preventDefault();

    let newBand = this.store.createRecord('band', { name: this.newBandName });
    await newBand.save();

    this.setProperties({ newBandName: '', isAddingBand: false });
    this.transitionToRoute('bands.band.songs', newBand.id);
  }

  @action
  cancelAddBand() {
    this.set('isAddingBand', false);
  }
}
