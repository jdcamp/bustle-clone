import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    saveArticle() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        image: this.get('img'),
        date: this.get('date'),
        body: this.get('body'),
      };
      this.sendAction('saveArticle', params);
    }
  }
});
