import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class BandsBandDetailsController extends Controller {
  isEditing = false;

  @action
  toggleIsEditing() {
    this.toggleProperty('isEditing');
  }
}
