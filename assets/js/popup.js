$(function() {
    $(window).on("load", function() {
        $(".loader").fadeOut(3800);
        $("video").fadeIn(5000);
    });
});

var video = document.getElementById("video_background");
    video.addEventListener("canplay", function() {
    setTimeout(function() {
        video.play();
        }, 200);
        video.pause();
        
    });