var init = function(){
  var pictures = document.querySelectorAll(".picture")
  var videos = document.querySelectorAll(".video-pic")

  pictures.forEach(function(picture) {
    picture.onclick = function(){
      BigPicture({
        el: picture,
        imgSrc: picture.getAttribute("src")
      });
    };
  });

  videos.forEach(function(video) {
    video.onclick = function(){
      BigPicture({
        el: video,
        ytSrc: video.getAttribute("data-id")
      });
    };
  });
};
