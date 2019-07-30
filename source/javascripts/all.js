//= require jquery
//= require bootstrap-sprockets
//= require_tree .

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  addClasses();
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".navbar-wagon-brand img").style.width = "70px";
    document.querySelector(".navbar-wagon-brand-small img").style.width = "70px";
    document.querySelector(".dropdown-toggle").style.padding = "20px";
    document.querySelector('.navbar-wagon').style.height = "50px";
  } else {
    document.querySelector(".navbar-wagon-brand img").style.width = "100px";
    document.querySelector(".navbar-wagon-brand-small img").style.width = "100px";
    document.querySelector(".dropdown-toggle").style.padding = "35px";
    document.querySelector('.navbar-wagon').style.height = "80px";
  }
}


function addClasses() {
  const intro = document.querySelector('.intro-container');
  const about = document.querySelector('.about-content');
  const service = document.querySelector('.service-content');
  if (isScrolledIntoView(intro)) {
    intro.classList.remove('hidden');
    intro.classList.add('fadeIn');
  }
  if (isScrolledIntoView(about)) {
    about.classList.remove('hidden');
    about.classList.add('slideLeft');
  }
  if (isScrolledIntoView(service)) {
    service.classList.remove('hidden');
    service.classList.add('slideRight');
  }
}

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
