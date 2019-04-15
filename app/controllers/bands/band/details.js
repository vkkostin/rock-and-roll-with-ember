import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class BandsBandDetailsController extends Controller {
  isEditing = false;

  @action
  edit() {
    this.set('isEditing', true);
  }

  @action
  async save() {
    await this.model.save();
    this.set('isEditing', false);
  }
}
