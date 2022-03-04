// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likes = document.querySelectorAll(".like-glyph");
const error = document.querySelector(".hidden");
likes.forEach((heartElement) =>{
  heartElement.addEventListener("click", liker);
});
function liker(e) {
  const heart = e.target;
  // debugger;
  if (heart.innerText == EMPTY_HEART) {
    mimicServerCall()
      .then(function() {
        heart.innerText = FULL_HEART;
        heart.classList.toggle("activated-heart");
      })
      .catch(function() {
        setTimeout(function(){
          error.classList.toggle("hidden")
        }, 3000);
        error.classList.toggle("hidden");
      })
  }
  else {
    heart.innerText = EMPTY_HEART;
    heart.classList.toggle("activated-heart");
  }

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
