let main = document.querySelector("main");

let adviceId = document.querySelector("main > article:first-of-type");

let advice = document.querySelector("main > article:last-of-type");

let button = document.querySelector("main > button");

const apiUrl = "https://api.adviceslip.com/advice";

const consumeApi = async function () {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const data = await response.json();

    adviceId.textContent = "Advice #" + data.slip.id;
    advice.textContent = '"' + data.slip.advice + '"';
  } catch (error) {
    console.error("Erro:", error);
  }
};

window.addEventListener("load", consumeApi);

button.addEventListener("click", consumeApi);