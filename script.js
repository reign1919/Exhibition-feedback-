document.addEventListener("DOMContentLoaded", function () {
  const ratings = document.querySelectorAll(".rating");
  const sendButton = document.getElementById("send");

  // Function to show pop-up message
  function showMessage(message) {
    const popup = document.createElement("div");
    popup.className = "popup";
    popup.textContent = message;
    document.body.appendChild(popup);

    setTimeout(function () {
      popup.remove();
    }, 10000);
  }

  // Event listener for each rating button
  ratings.forEach(function (rating) {
    rating.addEventListener("click", function () {
      ratings.forEach(function (r) {
        r.classList.remove("active");
      });
      this.classList.add("active");
    });
  });

  // Event listener for send button
  sendButton.addEventListener("click", function () {
    const activeRating = document.querySelector(".rating.active");
    if (activeRating) {
      const message = activeRating.querySelector("small").textContent;
      switch (message) {
        case "Unhappy":
          showMessage("We are sorry that we were not able to live up to expectations. Thank you for the feedback.");
          break;
        case "Neutral":
          showMessage("Thank you for your feedback. We'll see what changes we can make to better this project.");
          break;
        case "Satisfied":
          showMessage("Thank you for your feedback. It was our pleasure.");
          break;
        default:
          showMessage("Thank you for your feedback.");
          break;
      }
    } else {
      showMessage("Please select a rating before sending.");
    }
  });
});
