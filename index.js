document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
      // Remove active class from all links
      document.querySelectorAll('nav a').forEach(otherLink => {
        otherLink.classList.remove('active');
      });
      // Add active class to the clicked link
      this.classList.add('active');
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const currentTimeUTC = document.getElementById('currentTimeUTC');
    const currentDay = document.getElementById('currentDay');

    function updateTimeAndDay() {
        const now = new Date();
        currentTimeUTC.textContent = now.toUTCString();
        currentDay.textContent = now.toLocaleString('en-us', {weekday: 'long'});
    }

    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000); // Update every second
});