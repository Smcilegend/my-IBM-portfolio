document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("recommendation-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        let name = document.getElementById("name").value;
        let message = document.getElementById("message").value;
  
        // Create a new recommendation item
        let recommendationItem = document.createElement("div");
        recommendationItem.classList.add("recommendation-item");
  
        // Create elements to display name and message
        let nameLabel = document.createElement("p");
        nameLabel.textContent = "Name: " + (name ? name : "Anonymous"); // If name is empty, display "Anonymous"
        let messageLabel = document.createElement("p");
        messageLabel.textContent = "Message: " + message;
  
        // Append name and message elements to recommendation item
        recommendationItem.appendChild(nameLabel);
        recommendationItem.appendChild(messageLabel);
  
        // Append recommendation item to the recommendation box
        let recommendationBox = document.getElementById("recommendation-box");
        recommendationBox.appendChild(recommendationItem);
  
        // Optionally, you can clear the form fields after submission
        document.getElementById("name").value = "";
        document.getElementById("message").value = "";
  
        window.alert("Thank you for submitting a recommendation!");
      });
  });
  