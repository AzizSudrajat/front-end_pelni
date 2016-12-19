(function($) {
    $(function() {

        // mobile navbar
        $('.button-collapse').sideNav();

        // dropdown menu navbarss
        $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            hover: true, // Activate on hover
            belowOrigin: true, // Displays dropdown below the button
            alignment: 'right' // Displays dropdown with edge aligned to the left of button
        });

        // silder
        $(document).ready(function() {
            $('.carousel').carousel();
        });

        // paralax
        $(document).ready(function() {
            $('.parallax').parallax();
        });

        // var options = [
        //   {selector: '#test', offset: 600, callback: function(el) {
        //     Materialize.fadeInImage($(el));
        //   } }
        // ];
        // Materialize.scrollFire(options);

        $(document).ready(function() {
            $('.slider').slider({
                full_width: false,
                height: 500,
                interval: 4000,
            });
        });


    }); // end of document ready
})(jQuery); // end of jQuery name space
