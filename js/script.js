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
});