import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | bands/band/songs', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('isAddButtonDisabled', function(assert) {
    let controller = this.owner.lookup('controller:bands/band/songs');

    controller.set('newSongName', 'Belenos');

    assert.notOk(controller.get('isAddButtonDisabled'), 'The button is not disabled when there is a title');
    controller.set('newSongName', '');
    assert.ok(controller.get('isAddButtonDisabled'), 'The button is disabled when the title is empty');
  });
});
