const adviceText = document.getElementById("advice-text");
const adviceId = document.getElementById("advice-id");
const adviceBtn = document.getElementById("advice-btn");

adviceBtn.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      const advice = data.slip.advice;
      const id = data.slip.id;
      adviceText.textContent = `"${advice}"`;
      adviceId.textContent = `Advice #${id}`;
    })
    .catch((error) => {
      adviceText.textContent = "Oops! Couldn't fetch advice.";
      console.error("Error fetching advice:", error);
    });
});
