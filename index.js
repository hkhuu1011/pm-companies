$(function() {

// Using WP api 'categories' to display list of companies
const apiRoot = 'https://perspectivemagazine.com/wp-json',
	  articleContainer = $('main#main');
let listCat = {};

listCat.init = function() {

	$.ajax( {
	  url: apiRoot + '/wp/v2/categories',
	  success: function ( categories ) {
			listCat.render( categories );
	  },
		error:  function( err ) {
			console.log( 'Error: ', err );
		}
	} );

};
listCat.init();

// Loop through categories
listCat.render = function( categories ) {

	for ( let category of categories ) {
		listCat.renderCat( category );
	}

};

listCat.renderCat = function( category ) {

  const article = $( '<article>' ),
			titleEl = listCat.getTitleMarkup( category ),
			contentEl = listCat.getContentMarkup( category );

	$( article ).addClass('category');
	$( article ).append( titleEl );
	$( article ).append( contentEl );
	$( articleContainer ).append( article );

};

listCat.getTitleMarkup = function( category ) {

	const title = $( '<h2>' ),
		  titleLink = $( '<a>' );

	$(title).addClass('entry-title');
	$(titleLink).text( category.name );
	$(titleLink).attr( 'href', 'https://perspectivemagazine.com/wp-json/wp/v2/posts?categories=' + category.id );

	$(title).append( titleLink );

	return title;

};

listCat.getContentMarkup = function( category ) {

	const content = $( '<div>' );

	$(content).addClass('entry-content');
	$(content).html( category.link.rendered );

	return content;

};

listCat.clearCat = function() {

		$(articleContainer).html('');

};


// Using WP api 'posts' to show posts by category company name
// const apiPost = 'https://perspectivemagazine.com/wp-json',
// 	  postContainer = $('main#main2');
// let listPost = {};

// listPost.init = function() {

// 	$.ajax({
// 		url: apiPost + '/wp/v2/posts?categories=1186',
// 		success: function ( posts ) {
// 			listPost.render( posts );
// 		},
// 		error: function( err ) {
// 			console.log( 'Error: ', err );
// 		}
// 	});
// };
// listPost.init();

// Loop through posts
// listPost.render = function( posts ) {

// 	for ( let post of posts ) {
// 		listPost.renderPost( post );
// 	}

// };

// listPost.renderPost = function( post ) {

//   const articlePost = $( '<article>' ),
// 			titlePostEl = listPost.getTitleMarkup( post ),
// 			// contentEl = listPost.getContentMarkup( post );

// 	$( articlePost ).addClass('post');
// 	$( articlePost ).append( titlePostEl );
// 	// $( article ).append( contentEl );
// 	// $( articleContainer ).append( articlePost );

// };

// listPost.getTitleMarkup = function( post ) {

// 	const titlePost = $( '<h2>' ),
// 		  titlePostLink = $( '<a>' );

// 	$(titlePost).addClass('entry-title');
// 	$(titlePostLink).text( post.title.rendered );
// 	// $(titlePostLink).attr( 'href', 'https://perspectivemagazine.com/wp-json/wp/v2/posts?categories=' + post.id );

// 	$(titlePost).append( titlePostLink );

// 	return titlePost;

// };

});
