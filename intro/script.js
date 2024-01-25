const introVideo = document.querySelector("#intro-video")
console.log(introVideo);
introVideo.addEventListener("ended", function(){
    window.location.href = "enter.html";
});
