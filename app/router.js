import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("home", { path: '/' }, function() {});
  this.route("info");
  this.route("parks");
});

export default Router;
