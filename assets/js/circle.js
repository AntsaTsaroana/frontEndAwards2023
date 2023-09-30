const text = document.querySelector(".circle p");

text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 12}deg)">${char}</span>`
  )
  .join("");
