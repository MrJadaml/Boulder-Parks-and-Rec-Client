import DS from 'ember-data';

export default DS.Model.extend({
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
