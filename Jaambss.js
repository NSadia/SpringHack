$(document).ready(function() {
    $(".buttons").hover(function() {
        $(this).find(".popover").fadeIn(700)
    }, function() {
        $(".popover").fadeOut(700)
    });
})
