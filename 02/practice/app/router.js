import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('posts', function () {
		this.route('postOne', {path: '/my-post-one'});
		this.route('postTwo', {path: '/my-post-two'});
	});
});

export default Router;
