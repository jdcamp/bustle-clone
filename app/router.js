import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('page-not-found', {
    path: '/*wildcard'
  });
  this.route('admin');
  this.route('article', {path: '/article/:article_id'});
});

export default Router;
