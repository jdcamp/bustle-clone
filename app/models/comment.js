import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  body: DS.attr(),
  date: DS.attr(),
  article: DS.belongsTo('article', {async: true})
});
