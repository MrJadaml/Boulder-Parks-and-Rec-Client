import DS from 'ember-data';

var Park = DS.Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  zip: DS.attr('string'),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  body: DS.attr('string'),
  amenities: DS.attr('array'),
  image: DS.attr('string')
});

Park.reopenClass({
  FIXTURES: [
    {id: 1, name: 'Aurora 7 Park', latitude: 40.003895, longitude: -105.245413 },
    {id: 2, name: 'Boulder Reservoir', latitude: 40.073885, longitude: -105.238069 },
    {id: 3, name: 'Columbine Park', latitude: 40.033381 , longitude: -105.267957 },
    {id: 4, name: 'Coot Lake', latitude: 40.08814, longitude: -105.211553 },
    {id: 5, name: 'Ebin G. Fine Park', latitude: 40.013053, longitude: -105.293925 },
    {id: 6, name: 'Emma Gomes Martinez Park', latitude: 40.017604, longitude: -105.268218 },
    {id: 7, name: 'Foothills Community Park', latitude: 40.055598, longitude: -105.287667 },
    {id: 8, name: 'Shanahan Ridge Park', latitude: 39.965379, longitude: -105.252246 },
    {id: 9, name: 'Wonderland Lake Park', latitude: 40.050049, longitude: -105.282944 }
  ]
});

export default Park;
