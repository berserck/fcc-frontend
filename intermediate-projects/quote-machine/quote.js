function getQuote() {
  $.ajax({
    url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
    cache: false,
    success: function(data) {
console.log(data);
      var post = data.shift();
      $('.quote').fadeOut(500, function() {
        $(this).html(post.content).fadeIn(500);
      });
      $('cite').fadeOut(500, function() {
        $(this).text(post.title).fadeIn(500);
      });
      updateTweet(post);
    }
  })
}

function updateTweet(post){
  // update tweet
console.log("update tweet");
      var base = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";
      console.log($(post.content).text());
      var tweetURL = base + encodeURI($(post.content).text() + "-" + post.title);
      $('#tweet-button').attr("href", tweetURL);
}

$(document).ready(function() { getQuote(); });
