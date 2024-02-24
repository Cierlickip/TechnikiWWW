
(function($) {
    'use strict';

    // Main Navigation
    $('.menu-controls').on('click', function() {
        $(this).toggleClass('close');
        $('.project-branding').toggleClass('hide');
        $('.project-navigation').toggleClass('show');
        $('.custom-header').toggleClass('no-shadow');
    });

})(jQuery);


