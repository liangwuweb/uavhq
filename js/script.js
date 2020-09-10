$(document).ready(function () {
    $('.carousel').carousel({
        interval: 5000,
        pause: false
    })

    //Modal
    $('#universeModal').on('shown.bs.modal', function (event) {
        var card = $(event.relatedTarget); // Card that triggered the modal
        var videoSrc = card.data('src'); // Extract info from data-* attributes

        // Update the modal's content, and set it to autoplay
        var modal = $(this);
        modal.find('#video').attr('src', videoSrc + '?&autoplay=1');

        //Stop the video when hide the modal
        $("#universeModal").on("hide.bs.modal", function (event) {
            var modal = $(this);
            modal.find('#video').attr('src', '');
        });
    })

    //Navbar toggle icon
    $('#navbarCollapse').on('show.bs.collapse', function () {
        $('.animated-icon2').addClass('open');
        $(this).on('hide.bs.collapse', function () {
            $('.animated-icon2').removeClass('open');
        })
    })

    //Remove box-shadow in small screen
    // var width = $(window).width();
    // if (width < 992) {
    //     $('.dropdown-menu').addClass('shadow-none')
    // } else if (width >= 992) {
    //     $('.dropdown-menu').addClass('shadow')
    // }

    // $(window).resize
});