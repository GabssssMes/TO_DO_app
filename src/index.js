const button = document.getElementById("newItem");
let newContainer = document.querySelector(".newItemContainer");
let container = document.querySelector(".container");
let image = document.querySelector(".image");
let sidebar = document.querySelector(".sidebar");
button.addEventListener("click", () => {
  image.setAttribute("style", "filter: blur(8px);-webkit-filter: blur(8px);");
  container.setAttribute(
    "style",
    "filter: blur(8px);-webkit-filter: blur(8px);"
  );
  button.setAttribute("style", "display:none;");
  sidebar.setAttribute("style", "display:none;");
  newContainer.setAttribute("style", "display:inline;");
});
