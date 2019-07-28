//= require jquery
//= require bootstrap-sprockets
//= require_tree .

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".navbar-wagon-brand img").style.width = "70px";
    document.querySelector(".navbar-wagon-brand-small img").style.width = "70px";
    document.querySelector(".dropdown-toggle").style.padding = "20px";
    document.querySelector('.navbar-wagon').style.backgroundColor = "#111116";
  } else {
    document.querySelector(".navbar-wagon-brand img").style.width = "100px";
    document.querySelector(".navbar-wagon-brand-small img").style.width = "100px";
        document.querySelector(".dropdown-toggle").style.padding = "35px";
    document.querySelector('.navbar-wagon').style.backgroundColor = 'transparent'
  }
}
