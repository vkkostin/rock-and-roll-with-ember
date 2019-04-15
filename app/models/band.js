import DS from 'ember-data';

const { Model, attr, hasMany } = DS;

export default class Band extends Model {
  @attr('string', )
  name;

  @attr('string', { defaultValue: '' })
  description;

  @hasMany('song')
  songs;
}