let screenWidth = screen.width;
let video = document.getElementById("main-video");
console.log("Screen width = " + screenWidth);

if (screenWidth > 998) {
    video.innerHTML = '<video id="main-video" class="main-video" autoplay muted width="900" height="500" controls controlsList="nodownload" poster="/Recruiting Video and Photos/Main Video Cover Photo.png"><source src="/Recruiting Video and Photos/ASLAR Logistics Recruiting Video.MP4" type="video/mp4" /></video>';
}

else {
    video.innerHTML = '<video id="main-video" class="main-video" width="900" height="500" controls controlsList="nodownload" poster="/Recruiting Video and Photos/Main Video Cover Photo.png"><source src="/Recruiting Video and Photos/ASLAR Logistics Recruiting Video.MP4" type="video/mp4" /></video>';
}