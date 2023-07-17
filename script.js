document.addEventListener("DOMContentLoaded", function() {
    const progressBarFill = document.getElementById("progress-bar-fill");
    const progressBarText = document.getElementById("progress-bar-text");
  
    const maxMinutes = 5; // Maximum number of minutes
    const intervalMinutes = 1; // Progress interval (in minutes)
    const intervalMilliseconds = intervalMinutes * 60 * 1000; // Convert interval to milliseconds
  
    let currentMinutes = 0; // Current minutes
  
    setInterval(function() {
      currentMinutes += intervalMinutes; // Increase current minutes by interval
  
      if (currentMinutes > maxMinutes) {
        currentMinutes = maxMinutes; // Cap current minutes at the maximum
      }
  
      const progressPercentage = (currentMinutes / maxMinutes) * 100; // Calculate progress percentage
  
      progressBarFill.style.transform = `rotate(${progressPercentage * 3.6}deg)`; // Set fill progress (1% = 3.6deg)
      progressBarText.textContent = `${progressPercentage}%`; // Update progress text
  
      // Add class to indicate progress stage
      if (progressPercentage >= 20) {
        progressBarFill.classList.add("progress-20");
      }
      if (progressPercentage >= 40) {
        progressBarFill.classList.add("progress-40");
      }
      if (progressPercentage >= 60) {
        progressBarFill.classList.add("progress-60");
      }
      if (progressPercentage >= 80) {
        progressBarFill.classList.add("progress-80");
      }
      if (progressPercentage >= 100) {
        progressBarFill.classList.add("progress-100");
      }
    }, intervalMilliseconds); // Run every `intervalMilliseconds` (in milliseconds)
  });