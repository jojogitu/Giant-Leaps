$(document).ready(function() {

      /** ===========================================
        Hide / show the master navigation menu
      ============================================ */

      // console.log('Window Height is: ' + $(window).height());
      // console.log('Document Height is: ' + $(document).height());

      var previousScroll = 0;

      $(window).scroll(function() {

        var currentScroll = $(this).scrollTop();

        /*
          If the current scroll position is greater than 0 (the top) AND the current scroll position is less than the document height minus the window height (the bottom) run the navigation if/else statement.
        */
        if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()) {
          /*
            If the current scroll is greater than the previous scroll (i.e we're scrolling down the page), hide the nav.
          */
          if (currentScroll > previousScroll) {
            hideNav();
            /*
              Else we are scrolling up (i.e the previous scroll is greater than the current scroll), so show the nav.
            */
          } else {
            showNav();
          }
          /*
            Set the previous scroll value equal to the current scroll.
          */
          previousScroll = currentScroll;
        }

      });

      function hideNav() {
        $(".navbar-sub").addClass("is-hidden");
      }

      function showNav() {
        $(".navbar-sub").removeClass("is-hidden");
      }
});

/** ===========================================
  Hide / show the magazine overlay
============================================ */

function openOverlay() {
    document.getElementById("overl").style.height = "100%";
}

function closeOverlay() {
    document.getElementById("overl").style.height = "0%";
}

/** ===========================================
  Create the Flipbook
============================================ */

function loadApp() {
	$('.flipbook').turn({
			width:922,
			height:600,
			elevation: 50,
			gradients: true,
			autoCenter: true
	});
}

// Load the HTML4 version if there's not CSS transform
yepnope({
	test : Modernizr.csstransforms,
	yep: ['assets/js/turn/turn.js'],
	nope: ['assets/js/turn.html4.min.js'],
	both: ['assets/css/basic.css'],
	complete: loadApp
});
