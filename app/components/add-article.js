import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    articleFormShow() {
      this.set('addNewArticle', true);
    },

    saveArticle() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        body: this.get('body'),
        date: this.get('date'),
        image: this.get('image'),
      };
      this.set('addNewArticle', false);
      this.sendAction('saveArticle', params);
    }
  }
});
