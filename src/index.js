import { createbody, addProjectToForm } from "./modules/createHTML.js";
import { addToDo, addProject, addNode } from "./modules/addItem.js";
import { done } from "./modules/checkdone.js";
import { printToDos } from "./modules/print.js";
import { description } from "./modules/description.js";

import "../dist/Styles/styles.css";

createbody();

const newItembutton = document.getElementById("newItemButton");
const typeButton = document.getElementById("addTypeButton");
const addToDoButton = document.getElementById("addToDoButton");
const addProjectButton = document.getElementById("addProjectButton");
const addNodeButton = document.getElementById("addNodeButton");
const editToDoButton = document.getElementById("editToDoButton");

const whatmodal = document.getElementById("what_to_add");
const toDoModal = document.getElementById("toDo");
const projectModal = document.getElementById("project");
const nodeModal = document.getElementById("node");
const edittoDoModal = document.getElementById("toDoEdit");

const newToDoForm = document.getElementById("newToDo");
const newProjectForm = document.getElementById("newProject");
const newNodeForm = document.getElementById("newNode");
const editToDoForm = document.getElementById("editToDo");

const add = document.getElementsByName("add");

let item = [],
  id = 1,
  editID,
  deleteID;

newItembutton.addEventListener("click", () => {
  whatmodal.showModal();
});
typeButton.addEventListener("click", () => {
  for (let i = 0; i < add.length; i++) {
    if (add[i].checked) {
      if (add[i].value == "To_do") toDoModal.showModal();
      else if (add[i].value == "Node") nodeModal.showModal();
      else if (add[i].value == "Project") projectModal.showModal();
    }
  }
});
addToDoButton.addEventListener("click", () => {
  item.push(
    new addToDo(
      "To_do",
      newToDoForm.title,
      newToDoForm.description,
      newToDoForm.project,
      newToDoForm.date,
      newToDoForm.priority,
      id
    )
  );
  id++;
  newToDoForm.title.value = "";
  newToDoForm.description.value = "";
  printToDos(item);
  done(item);
  description(item);
  editToDo();
  del();
});

addProjectButton.addEventListener("click", () => {
  item.push(new addProject("Project", newProjectForm.project));
  addProjectToForm(item[item.length - 1].title.value);
  newProjectForm.project.value = "";
});

addNodeButton.addEventListener("click", () => {
  item.push(new addNode("Node", newNodeForm.title, newNodeForm.description));
  newNodeForm.title.value = "";
  newNodeForm.description.value = "";
});

editToDoButton.addEventListener("click", () => {
  item.push(
    new addToDo(
      "To_do",
      editToDoForm.title,
      editToDoForm.description,
      editToDoForm.project,
      editToDoForm.date,
      editToDoForm.priority,
      id
    )
  );
  for (let i = 0; i < item.length; i++) {
    if (editID == item[i].id) {
      if (item[i].done == true) item[item.length - 1].done = true;
      item.splice(i, 1);
    }
  }
  id++;
  printToDos(item);
  done(item);
  description(item);
  editToDo();
  del();
});

function del() {
  const deletes = document.querySelectorAll("#delete");
  deletes.forEach((delet) => {
    delet.addEventListener("click", () => {
      deleteID = delet.parentNode.parentNode.id;
      for (let i = 0; i < item.length; i++) {
        if (deleteID == item[i].id) {
          item.splice(i, 1);
        }
      }
      printToDos(item);
      done(item);
      description(item);
      editToDo();
      del();
    });
  });
}
function editToDo() {
  const edits = document.querySelectorAll("#edit");
  edits.forEach((edit) => {
    edit.addEventListener("click", () => {
      editID = edit.parentNode.parentNode.id;
      for (let i = 0; i < item.length; i++) {
        if (editID == item[i].id) {
          editToDoForm.title.value = item[i].title;
          editToDoForm.description.value = item[i].description;
          editToDoForm.project.value = item[i].project;
          editToDoForm.date.value = item[i].date;
          editToDoForm.priority.value = item[i].priority;
          edittoDoModal.showModal();
        }
      }
    });
  });
}
