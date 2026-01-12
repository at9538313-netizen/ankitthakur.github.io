


function playVideo() {
    let video = document.getElementById("courseVideo");
    video.style.display = "block";
    video.play();
}


// Show login popup when site loads
window.onload = () => {
  document.getElementById("loginModal").style.display = "flex";
};