import $ from 'jquery';
import Post from '../models/post';

function saveBlog(){
  let $newBlog = $(`
    <div class="blogContainer">
		<h2>The Blog Saver!</h2>
		<input class="title" type="text" name="name" placeholder="Title goes here!">
		<input class="body" type="text" name="name" placeholder="Body goes here!">
		<button type="button" name="button">Submit</button>
	  </div>
    `);
    $('.container').append($newBlog);
    let $nav = $(`
      <nav>
    			<a href="#blogSaver">BlogSaver</a>
    			<a href="#personSaver">PersonSaver</a>
    	</nav>
      `);
      $('.container').prepend($nav);
  $newBlog.find('button').on('click', function (e){
    e.preventDefault();
    let blogPost = new Post({
      title: $('.title').val(),
      body: $('.body').val()
    });
    blogPost.save(null, {
      sucess: function(response) {
        console.log('congrats, you finally saved the post!');//<--post is saving, but this isn't happening yet, I don't know why.
      }
    });
  });
return $newBlog; //<---is this only to stop the function??
}
export default saveBlog;
