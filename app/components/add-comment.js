import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment() {
      var params = {
        username: this.get('username'),
        body: this.get('body'),
        date: this.get('date'),
        article: this.get('article')
      };
      console.log(Ember.inspect(this.target));
      this.sendAction('saveComment', params);
    }
  }
});
