import Ember from 'ember';



export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      articles: this.store.findAll('article'),
      comments: this.store.findAll('comment'),
      main: this.store.findAll('article').then((list) => {
          const rand = Math.floor(Math.random() * list.get('length'));
          console.log(list.objectAt(rand));
          return list.objectAt(rand);
      })
    });
  },

  actions: {
    saveArticle(params) {
      var newArticle = this.store.createRecord('article', params);
      newArticle.save();
      this.transitionTo('index');
    }
  }

});
$(function() {

  // var wrap = $("#wrap");
  // document.addEventListener('scroll', function(e) {
  //   if (window.scrollTop > 10) {
  //     console.log('working');
  //     wrap.addClass("fix-search");
  //   } else {
  //     console.log('not working');
  //     wrap.removeClass("fix-search");
  //   }
  // });

  $(window).scroll(function() {
    var wrap = $("#wrap");
    var scroll = $(window).scrollTop();
    if (scroll >= 353) {
      wrap.addClass("navbar-fixed-top");
      console.log("working");
    } else {
      console.log("not working");
      wrap.removeClass("navbar-fixed-top");
    }
  });
});
