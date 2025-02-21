function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("background-video");

  if (video) {
    video.muted = true; // Ensure it's muted
    video.loop = true; // Ensure it loops
    video.autoplay = true; // Attempt to autoplay
    video.playsInline = true; // Ensure it works on mobile

    video.play().catch((error) => {
      console.error("Autoplay prevented:", error);
      // If autoplay is blocked, play video on user interaction
      document.body.addEventListener("click", () => video.play(), {
        once: true,
      });
    });
  }
});

/* <script>
      document.addEventListener("DOMContentLoaded", function () {
        const video = document.getElementById("background-video");

        if (video) {
          video.muted = true; // Ensure it's muted
          video.loop = true; // Ensure it loops
          video.autoplay = true; // Attempt to autoplay
          video.playsInline = true; // Ensure it works on mobile

          video.play().catch((error) => {
            console.error("Autoplay prevented:", error);
            // If autoplay is blocked, play video on user interaction
            document.body.addEventListener("click", () => video.play(), {
              once: true,
            });
          });
        }
      });
    </script> */
