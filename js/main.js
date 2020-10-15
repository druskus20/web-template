/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar 
    source https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
*/
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}


// Hide scrollbar on fullscreen (if supported)
/* 
$(window).resize(function() {
    if((window.fullScreen) || (window.innerWidth == screen.width && window.innerHeight == screen.height)) {
        $("html").addClass("inv-scrollbar");
    } else {
        $("html").removeClass("inv-scrollbar");
    }
});*/


// Scroll down when clicking the arrow in index.html
// TODO: Replace this with plain js
function indexScrollDown() {
    $('html, body').animate({
        scrollTop: $("#nav").offset().top
    }, 1000);
}

function themeSwitch() {
  let theme = document.documentElement.getAttribute('data-theme');
  if (theme == null || theme == 'light') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  else if (theme == 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}