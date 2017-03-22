import Ember from 'ember';

export default Ember.Component.extend({
  updateArticle: false,
  actions: {
    updateFormShow() {
      this.set('updateArticle', true);
    },
    update(article) {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        body: this.get('body'),
        date: this.get('date'),
        image: this.get('image')
      };
      console.log(Ember.inspect(article));
      this.set('updateArticle', false);
      this.sendAction('update', article, params);
    }
  }
});
// $(function() {
//
// });
//
// $(document).on('click', '.update-button', function() {
//       $('.update-button').click(function() {
//           $(".update-form").css("display", "block");
//           //$(".update-form").addClass('update-form-show');
//           console.log("clicked");
//
//         });
//       });
// $(document).on('click', '.update-button', function() {
//       $('.update-button').click(function() {
//           $(".update-form").css("display", "block");
//           //$(".update-form").addClass('update-form-show');
//           console.log("clicked");
//
//         });
//       });
