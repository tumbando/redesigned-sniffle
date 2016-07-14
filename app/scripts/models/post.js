import Backbone from 'backbone';

const Post = Backbone.Model.extend({
  urlRoot: 'https://tiny-za-server.herokuapp.com/collections/louie-blogposts'

});

export default Post;
