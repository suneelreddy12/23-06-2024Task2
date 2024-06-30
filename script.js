document.getElementById("fetch-advice").addEventListener("click", fetchAdvice);

function fetchAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      displayAdvice(data.slip.advice);
    })
    .catch((error) => {
      console.error("Error fetching advice:", error);
    });
}

function displayAdvice(advice) {
  const adviceDiv = document.getElementById("advice");
  adviceDiv.classList.remove("hidden");
  adviceDiv.innerHTML = `<p class="lead">${advice}</p>`;
}
