function playVideo(card) {
  const video = card.querySelector('video');
  if (video) video.play();
}

function pauseVideo(card) {
  const video = card.querySelector('video');
  if (video) {
      video.pause();
      video.currentTime = 0;
  }
}
