document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  var decemberSeven = (new Date('December 7, 2024').getTime() / 1000);

  // Set up FlipDown
  var flipdown = new FlipDown(decemberSeven, {
    theme: "light"
  })

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });

  // Toggle theme
  // var interval = setInterval(() => {
  //   let body = document.body;
  //   body.classList.toggle('light-theme');
  //   body.querySelector('#flipdown').classList.toggle('flipdown__theme-dark');
  //   body.querySelector('#flipdown').classList.toggle('flipdown__theme-light');
  // }, 5000);

  // Show version number
  // var version = document.getElementById('version');
  // version.innerHTML = flipdown.version;
});