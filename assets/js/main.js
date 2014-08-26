( function( $ ) {

    // Setup variables
    $window = $(window);
    $slide = $('.section--full');
    $body = $('body');


    //FadeIn all sections   
    $body.imagesLoaded( function() {
        $body.addClass('loading');
        setTimeout(function() {

            // Resize sections
            adjustWindow();

            // Fade in sections
            $body.removeClass('loading').addClass('loaded');


        }, 800);
    });



    adjustWindow();

    function adjustWindow(){

        if(!(/Android|iPhone|iPod|iPad|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){

            var s = skrollr.init(
            //{
            //    forceHeight: false
            //}

            );
        }


        // Get window size
        winH = $window.height();

        //Keep minimum height 550
        //if(winH <= 550) {
        //    winH = 550;
        //}

        // Resize our slides
        $slide.height(winH);

        // Refresh Skrollr after resizing our sections
        if(!(/Android|iPhone|iPod|iPad|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
            s.refresh($slide);
        }
    }



} )( jQuery );