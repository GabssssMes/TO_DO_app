import { isThisWeek, isThisMonth, isThisYear, isToday } from "date-fns";

function printToDos(ToDo) {
  const content = document.querySelector(".content");
  content.innerHTML = "";
  for (let i = 0; i < ToDo.length; i++) {
    if (ToDo[i].type == "To_do") {
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
}
function printWeek(ToDo) {
  const content = document.querySelector(".content");
  content.innerHTML = "";
  for (let i = 0; i < ToDo.length; i++) {
    if (ToDo[i].type == "To_do") {
      let newdate = ToDo[i].date.split("/");
      let day = new Date(newdate[2] + "-" + newdate[1] + "-" + newdate[0]);
      if (isThisWeek(day)) {
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
  }
}
function printMonth(ToDo) {
  const content = document.querySelector(".content");
  content.innerHTML = "";
  for (let i = 0; i < ToDo.length; i++) {
    if (ToDo[i].type == "To_do") {
      let newdate = ToDo[i].date.split("/");
      let day = new Date(newdate[2] + "-" + newdate[1] + "-" + newdate[0]);
      if (isThisMonth(day)) {
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
  }
}
function printYear(ToDo) {
  const content = document.querySelector(".content");
  content.innerHTML = "";
  for (let i = 0; i < ToDo.length; i++) {
    if (ToDo[i].type == "To_do") {
      let newdate = ToDo[i].date.split("/");
      let day = new Date(newdate[2] + "-" + newdate[1] + "-" + newdate[0]);
      if (isThisYear(day)) {
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
  }
}
function printToday(ToDo) {
  const content = document.querySelector(".content");
  content.innerHTML = "";
  for (let i = 0; i < ToDo.length; i++) {
    if (ToDo[i].type == "To_do") {
      let newdate = ToDo[i].date.split("/");
      let day = new Date(newdate[2] + "-" + newdate[1] + "-" + newdate[0]);
      if (isToday(day)) {
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
  }
}

function printNode(node) {
  const content = document.querySelector(".content");
  content.innerHTML = "";
  for (let i = 0; i < node.length; i++) {
    if (node[i].type == "Node") {
      let item = document.createElement("div");

      item.setAttribute("class", "item");
      item.setAttribute("id", node[i].id);
      item.innerHTML =
        `<div id="title">` +
        node[i].title +
        `</div>
        <div class="end">
          <div id="description">Details</div>
            <i class="fa-solid fa-pen-to-square" id="edit" title="edit"></i>
            <i class="fa-solid fa-trash" id="delete" title="delete"></i>
        </div>`;
      content.appendChild(item);
    }
  }
}

function printProject(Project) {
  const content = document.querySelector(".content");
  content.innerHTML = "";
  for (let i = 0; i < Project.length; i++) {
    if (Project[i].type == "Project") {
      let item = document.createElement("div");

      item.setAttribute("class", "item");
      item.setAttribute("id", Project[i].id);
      item.innerHTML =
        `<div id="title">` +
        Project[i].title +
        `</div>
        <div class="end">
            <i class="fa-solid fa-pen-to-square" id="edit" title="edit"></i>
            <i class="fa-solid fa-trash" id="delete" title="delete"></i>
        </div>`;
      content.appendChild(item);
    }
  }
}
export {
  printToDos,
  printWeek,
  printMonth,
  printYear,
  printToday,
  printNode,
  printProject,
};
