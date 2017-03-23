import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('article', params.article_id);

  },
  actions: {

    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      console.log(Ember.inspect(newComment));
      var article = params.article;
      article.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return article.save();
      });
      this.transitionTo('article', article);
    }
  }
});
