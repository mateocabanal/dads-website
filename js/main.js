// Main.js file

$(document).ready(function() {
    $('#pager div a').on('click', function(e) {
        $('html, body').animate({
            'scrollTop': 0
        }, 320, function() {
            $("#mySlideshow-cont").removeClass("slideClosed");
        });
    });
    $('#close').on('click', function(e) {
        $("#mySlideshow-cont").addClass("slideClosed");
    });
});
