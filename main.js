// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalMessage = document.getElementById("modal-message");

  // Add event listener to all like buttons
  const likeButtons = document.querySelectorAll(".like");
  likeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          // On success, change the heart icon and style
          button.classList.add("activated-heart");
          button.innerHTML = "Liked! <span class='like-glyph'>&#x2665;</span>";
        })
        .catch((error) => {
          // On error, display the error modal
          modalMessage.innerText = error;
          modal.classList.remove("hidden");

          // Hide the error modal after 3 seconds
          setTimeout(() => {
            modal.classList.add("hidden");
          }, 3000);
        });
    });
  });
});

function mimicServerCall() {
  return new Promise((resolve, reject) => {
    // Simulate a server call (50% success, 50% failure)
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.5) {
        resolve("Success");
      } else {
        reject("Error");
      }
    }, 300);
  });
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
