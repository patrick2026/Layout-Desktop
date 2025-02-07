function ToggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  // pegar a tag img
  const img = document.querySelector("#profile img");

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar imagem light
    img.setAttribute("src", "./assets/images/Patrick-2-light.png");
  } else {
    // se tiver light mode, manter normal
    img.setAttribute("src", "./assets/images/avatar.png");
  }
}
