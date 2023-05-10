function printToDos(ToDo) {
  const content = document.querySelector(".content");
  content.innerHTML = "";
  for (let i = 0; i < ToDo.length; i++) {
    let item = document.createElement("div");

    item.setAttribute("class", "item");
    item.setAttribute("id", ToDo[i].id);
    if (ToDo[i].done == false) {
      item.innerHTML =
        `
            <div class="start">
                <input type="checkbox" id="done"/>
                <div id="title">` +
        ToDo[i].title +
        `</div>
            </div>
            <div class="end">
                <div id="description">Details</div>
                <div id="date">` +
        ToDo[i].date +
        `</div>
                <i class="fa-solid fa-pen-to-square" id="edit" title="edit"></i>
                <i class="fa-solid fa-trash" id="delete" title="delete"></i>
            </div>`;
      content.appendChild(item);
    } else {
      item.innerHTML =
        `
            <div class="start">
                <input type="checkbox" id="done" checked/>
                <div id="title">` +
        ToDo[i].title +
        `</div>
            </div>
            <div class="end">
                <div id="description">Details</div>
                <div id="date">` +
        ToDo[i].date +
        `</div>
                <i class="fa-solid fa-pen-to-square" id="edit" title="edit"></i>
                <i class="fa-solid fa-trash" id="delete" title="delete"></i>
            </div>`;
      content.appendChild(item);
    }
  }
}

export { printToDos };
