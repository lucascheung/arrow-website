//= require jquery
//= require bootstrap-sprockets
//= require_tree .

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".navbar-wagon-brand img").style.width = "50px";
    document.querySelector('.navbar-wagon').style.backgroundColor = "#111116";
  } else {
    document.querySelector(".navbar-wagon-brand img").style.width = "80px";
    document.querySelector('.navbar-wagon').style.backgroundColor = 'transparent'
  }
}
