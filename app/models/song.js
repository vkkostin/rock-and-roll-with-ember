import DS from 'ember-data';

const { Model, attr, belongsTo } = DS;

export default class Song extends Model {
  @attr('string')
  title;

  @attr('number')
  rating;

  @belongsTo()
  band;
}