let buttonBackground = document.querySelector(".button");
let sectionAbout = document.querySelector(".section-about");

buttonBackground.addEventListener("click", () => {
  sectionAbout.classList.toggle("redBackground");
  if (buttonBackground.innerText === "Nudny kolor sekcji") {
    buttonBackground.innerText = "Krwisty kolor sekcji";
  } else {
    buttonBackground.innerText = "Nudny kolor sekcji";
  }
});

let buttonQuote = document.querySelector(".button__button-quote");
let quote = document.getElementById("addQuote");

buttonQuote.addEventListener("click", () => {
  if (quote.style.display === "block") {
    quote.style.display = "none";
    buttonQuote.innerText = "Opowiedz mi fraszkę";
  } else {
    quote.style.display = "block";
    buttonQuote.innerText = "Już nie chcę fraszki";
  }
});