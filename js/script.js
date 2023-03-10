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

    // Navbar toggle icon
    $(document).on('show.bs.collapse', '#navbarCollapse', function (e) {
        $('.animated-icon2').addClass('open');
        $(this).on('hide.bs.collapse', function () {
            $('.animated-icon2').removeClass('open');
            $('.bg-overlay').removeClass('bg-overlay-show');
            $('body').removeClass('no-scroll');
        })
        $('.bg-overlay').addClass('bg-overlay-show');
        $('body').addClass('no-scroll');
    });

    //Dropdown toggle icon
    $(document).on('show.bs.dropdown', '.dropdown', function (e) {
        $(this).find('.dropdown-icon').addClass('rotate');
        $(this).find('.dropdown-menu').slideDown(200);
        $(this).on('hide.bs.dropdown', function () {
            $('.dropdown-icon').removeClass('rotate');
            $(this).find('.dropdown-menu').slideUp(200);
        })
    });
});