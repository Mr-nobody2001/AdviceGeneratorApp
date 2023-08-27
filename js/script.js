let main = document.querySelector("main");

let adviceId = document.querySelector("main > article:first-of-type");

let advice = document.querySelector("main > article:last-of-type");

let button = document.querySelector("main > button");

const apiUrl = "https://api.adviceslip.com/advice";

const consumeApi = function () {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      return response.json();
    })
    .then((data) => {
      adviceId.textContent = "Advice #" + data.slip.id;
      advice.textContent = '"' + data.slip.advice + '"';
    })
    .catch((error) => {
      console.error("Erro:", error);
    });
};

window.addEventListener("load", consumeApi);

button.addEventListener("click", consumeApi);
