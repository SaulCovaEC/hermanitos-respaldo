window.onscroll = function() {progressScroll()};

function progressScroll() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("scroll-progress").style.width = scrolled + "%";
}