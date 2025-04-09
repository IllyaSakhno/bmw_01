function playVideo(element) {
    const video = element.querySelector('.hover-video');
    video.style.opacity = 1;
    video.play().catch(e => console.log("Автовідтворення заблоковано:", e));
  }
  
  function pauseVideo(element) {
    const video = element.querySelector('.hover-video');
    video.style.opacity = 0;
    video.pause();
    video.currentTime = 0; // Перемотка на початок
  }