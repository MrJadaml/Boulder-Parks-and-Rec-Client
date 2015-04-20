import Ember from 'ember';

export default Ember.Controller.extend({
    reset: function () {
      this.setProperties({
        username: "",
        password: "",
        errorMessage: ""
      });
    },

  actions: {
    login: function () {
      var self = this, data = this.getProperties('username', 'password');
      self.set('errorMessage', null);
      Ember.$.post('/auth.json', data).then(function (response) {
        self.set('errorMessage', response.message);
        if (response.success) {
          self.set('token', response.token);
        }
      });
    }
  }
});
