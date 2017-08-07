
function play() {
    img = document.getElementsByClassName("video__mask");
    img[0].style.cssText="display:none";

    video = document.createElement("iframe");
    video.src="https://www.youtube.com/embed/kbkfOdMDFHM?ecver=2&autoplay=1";
    video.setAttribute("width", "940");
    video.setAttribute("height", "510");
    video.style.cssText = "margin: 0 auto; display: block;";

    img[0].style.cssText="display:none;";

    video_content = document.getElementsByClassName("video");
    video_content[0].appendChild(video)
}