window.addEventListener("load", () => {
  const text = document.getElementById("heroText");
  const image = document.getElementById("heroImage");
  const card = document.getElementById("card");

  text.classList.add("show");

  setTimeout(() => {
    image.classList.add("show");
  }, 300);

  setTimeout(() => {
    card.classList.add("show");
  }, 800);
});