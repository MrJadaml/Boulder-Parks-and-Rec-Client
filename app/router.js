import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("parks", {path: '/'});
  this.route("park", {path: ':park_id'});
  this.route("login");
});

export default Router;
