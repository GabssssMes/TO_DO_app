import {
  createbody,
  addProjectToForm,
  removeProjectFromForm,
  initialiceProjects,
} from "./modules/createHTML.js";
import { addToDo, addProject, addNode } from "./modules/addItem.js";
import { done } from "./modules/checkdone.js";
import {
  printToDos,
  printWeek,
  printMonth,
  printYear,
  printToday,
  printNode,
  printProject,
} from "./modules/print.js";
import { description, descriptionNode } from "./modules/description.js";
import { storeItems, loadItems } from "./modules/store.js";

import "../dist/Styles/styles.css";

createbody();
//localStorage.clear();

const newItembutton = document.getElementById("newItemButton");
const typeButton = document.getElementById("addTypeButton");
const addToDoButton = document.getElementById("addToDoButton");
const addProjectButton = document.getElementById("addProjectButton");
const addNodeButton = document.getElementById("addNodeButton");
const editToDoButton = document.getElementById("editToDoButton");
const editNodeButton = document.getElementById("editNodeButton");
const editProjectButton = document.getElementById("editProjectButton");

const whatmodal = document.getElementById("what_to_add");
const toDoModal = document.getElementById("toDo");
const projectModal = document.getElementById("project");
const nodeModal = document.getElementById("node");
const edittoDoModal = document.getElementById("toDoEdit");
const editNodeModal = document.getElementById("editNode");
const editProjectModal = document.getElementById("editProject");

const newToDoForm = document.getElementById("newToDo");
const newProjectForm = document.getElementById("newProject");
const newNodeForm = document.getElementById("newNode");
const editToDoForm = document.getElementById("editToDo");
const editNodeForm = document.getElementById("editNodeForm");
const editProjectForm = document.getElementById("editProjectForm");

const add = document.getElementsByName("add");

let item = loadItems(),
  id = 1,
  editID,
  deleteID,
  helpEditProject;

printToDos(item);
done(item);
description(item);
editToDo();
del();
storeItems(item);
initialiceProjects(item);

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
      id,
      false
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
  storeItems(item);
});

addProjectButton.addEventListener("click", () => {
  item.push(new addProject("Project", newProjectForm.project, id));
  addProjectToForm(item[item.length - 1].title);
  newProjectForm.project.value = "";
  id++;
  printProject(item);
  editProject();
  delProject();
  storeItems(item);
});

addNodeButton.addEventListener("click", () => {
  item.push(
    new addNode("Node", newNodeForm.title, newNodeForm.description, id)
  );
  id++;
  printNode(item);
  descriptionNode(item);
  editNode();
  delNode();
  storeItems(item);
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
      id,
      false
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
  storeItems(item);
});

editNodeButton.addEventListener("click", () => {
  item.push(
    new addNode("Node", editNodeForm.title, editNodeForm.description, id)
  );
  for (let i = 0; i < item.length; i++) {
    if (editID == item[i].id) {
      item.splice(i, 1);
    }
  }
  id++;
  printNode(item);
  descriptionNode(item);
  editNode();
  delNode();
  storeItems(item);
});

editProjectButton.addEventListener("click", () => {
  removeProjectFromForm(helpEditProject);
  item.push(new addProject("Project", editProjectForm.title, id));
  addProjectToForm(item[item.length - 1].title);
  for (let i = 0; i < item.length; i++) {
    if (editID == item[i].id) {
      item.splice(i, 1);
    }
  }
  id++;
  printProject(item);
  editProject();
  delProject();
  storeItems(item);
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
      storeItems(item);
    });
  });
}
function delNode() {
  const deletes = document.querySelectorAll("#delete");
  deletes.forEach((delet) => {
    delet.addEventListener("click", () => {
      deleteID = delet.parentNode.parentNode.id;
      for (let i = 0; i < item.length; i++) {
        if (deleteID == item[i].id) {
          item.splice(i, 1);
        }
      }
      printNode(item);
      descriptionNode(item);
      editNode();
      delNode();
      storeItems(item);
    });
  });
}
function delProject() {
  const deletes = document.querySelectorAll("#delete");
  deletes.forEach((delet) => {
    delet.addEventListener("click", () => {
      deleteID = delet.parentNode.parentNode.id;
      for (let i = 0; i < item.length; i++) {
        if (deleteID == item[i].id) {
          removeProjectFromForm(item[i].title);
          item.splice(i, 1);
        }
      }
      printProject(item);
      editProject();
      delProject();
      storeItems(item);
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
          let olddate = item[i].date.split("/");
          editToDoForm.title.value = item[i].title;
          editToDoForm.description.value = item[i].description;
          editToDoForm.project.value = item[i].project;
          editToDoForm.date.defaultValue =
            olddate[2] + "-" + olddate[1] + "-" + olddate[0];
          editToDoForm.priority.value = item[i].priority;
          edittoDoModal.showModal();
        }
      }
    });
  });
}
function editNode() {
  const edits = document.querySelectorAll("#edit");
  edits.forEach((edit) => {
    edit.addEventListener("click", () => {
      editID = edit.parentNode.parentNode.id;
      for (let i = 0; i < item.length; i++) {
        if (editID == item[i].id) {
          editNodeForm.title.value = item[i].title;
          editNodeForm.description.value = item[i].description;
          editNodeModal.showModal();
        }
      }
    });
  });
}
function editProject() {
  const edits = document.querySelectorAll("#edit");
  edits.forEach((edit) => {
    edit.addEventListener("click", () => {
      editID = edit.parentNode.parentNode.id;
      for (let i = 0; i < item.length; i++) {
        if (editID == item[i].id) {
          helpEditProject = item[i].title;
          editProjectForm.title.value = item[i].title;
          editProjectModal.showModal();
        }
      }
    });
  });
}

const times = document.querySelectorAll(".time");

times.forEach((time) => {
  time.addEventListener("click", () => {
    if (time.id == "today") {
      printToday(item);
      done(item);
      description(item);
      editToDo();
      del();
    } else if (time.id == "week") {
      printWeek(item);
      done(item);
      description(item);
      editToDo();
      del();
    } else if (time.id == "month") {
      printMonth(item);
      done(item);
      description(item);
      editToDo();
      del();
    } else if (time.id == "year") {
      printYear(item);
      done(item);
      description(item);
      editToDo();
      del();
    } else if (time.id == "all") {
      printToDos(item);
      done(item);
      description(item);
      editToDo();
      del();
    }
  });
});

const nodes = document.querySelector(".nodes");
nodes.addEventListener("click", () => {
  printNode(item);
  editNode();
  descriptionNode(item);
  delNode();
});

const projects = document.querySelector(".projects");
projects.addEventListener("click", () => {
  printProject(item);
  editProject();
  delProject();
});
const todo = document.querySelector(".todo");
todo.addEventListener("click", () => {
  printToDos(item);
  done(item);
  description(item);
  editToDo();
  del();
});
