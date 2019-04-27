import DS from 'ember-data';

const { Model, attr } = DS;

export default class extends Model {
  @attr('string')
  email;

  @attr('string')
  password;
}
