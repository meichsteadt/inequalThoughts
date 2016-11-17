$(function(){
  $("#title").typed({
    strings: ["Inequal Thoughts"],
    typeSpeed: 70,
    startDelay: 1000
  });
})

$("body").on('click', '.owed', function() {
  $.ajax( {url:"/never", success:function(result) {
    $("#post").html(result);
  }});
});

$("body").on('click', '.matters', function() {
  $.ajax( {url:"/matters", success:function(result) {
    $("#post").html(result);
  }});
});

$("body").on('click', '.close', function() {
  $.ajax( {url:"/index", success:function(result) {
    $("#post").html(result);
  }});
});

$("body").on('click', '#jerrelle_profile', function() {
  $.ajax( {url:"/jerrelle", success:function(result) {
    $("#profile_posts").html(result);
  }});
});

$("body").on('click', '#kirk_profile', function() {
  $.ajax( {url:"/kirk", success:function(result) {
    $("#profile_posts").html(result);
  }});
});

$("body").on('click', '#matt_profile', function() {
  $.ajax( {url:"/matt", success:function(result) {
    $("#profile_posts").html(result);
  }});
});
