
$(document).ready(function() {

  setTimeout(initAnimations, 300);
  function initAnimations() {
    console.log('init');
    $('#home').addClass('present');
  }


  //Take your div into one js variable
  var divNavbar = $("#header-navbar");
  var divProjects = $("#section-projects");
  var divAbout = $("#section-about");

  //Take the current position (vertical position from top) of your div in the variable
  var pos = divProjects.position();
  var posNavbar = divNavbar.position();

  $(window).scroll(function () {

    var windowPos = $(window).scrollTop();
    //Now if you scroll more than 100 pixels vertically change the class to AfterScroll
    // I am taking 100px scroll, you can take whatever you need
    if (windowPos >= (pos.top - 100)) {
     divProjects.addClass("show");
    }

    // Header toggleling
    if (windowPos >= (posNavbar.top + 400)) {
     divNavbar.addClass("scrolled");
    }
    else {
     divNavbar.removeClass("scrolled");
    }

 });

 $(document).on('click tap touchstart', '.project', function() {
   $(this).toggleClass('hover');
 });
});
