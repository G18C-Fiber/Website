document.addEventListener("DOMContentLoaded", function() {
    // Array of video filenames stored in the "assets/videos/" folder
    var videos = ['homevid1.mp4', 'homevid2.mp4', 'homevid3.mp4', 'homevid4.mp4', 'homevid5.mp4'];

    var videoElement = document.getElementById('video-player');
    var videoSource = document.getElementById('video-source'); // Only one source tag now

    // Variable to keep track of the current video index
    var currentIndex = Math.floor(Math.random() * videos.length); // Start with a random video

    // Function to load and play the video
    function playVideo() {
        videoSource.src = '../../../../assets/videos/' + videos[currentIndex];
        videoElement.load();  // Re-load the video with the new source
        videoElement.play();  // Start playing
    }

    // Start the first video
    playVideo();

    // When the video ends, change to the next video
    videoElement.addEventListener('ended', function() {
        // Increment the index to play the next video, wrapping around if needed
        currentIndex = (currentIndex + 1) % videos.length;
        playVideo(); // Load and play the next video
    });
});
