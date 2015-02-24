import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  zip: DS.attr('string'),
//location: DS.attr('hash', {
//  lat: DS.attr('string'),
//  lng: DS.attr('string')
//}),
  body: DS.attr('string'),
  amenities: DS.attr('array')
  image: DS.attr('string')
});
