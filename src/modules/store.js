import { addToDo, addProject, addNode } from "./addItem";

function storeItems(item) {
  localStorage.clear();
  for (let i = 0; i < item.length; i++) {
    if (item[i].type == "To_do") {
      localStorage.setItem("To_do[" + i + "].type", item[i].type);
      localStorage.setItem("To_do[" + i + "].title", item[i].title);
      localStorage.setItem("To_do[" + i + "].description", item[i].description);
      localStorage.setItem("To_do[" + i + "].project", item[i].project);
      localStorage.setItem("To_do[" + i + "].priority", item[i].priority);
      localStorage.setItem("To_do[" + i + "].date", item[i].date);
      localStorage.setItem("To_do[" + i + "].done", item[i].done);
      localStorage.setItem("To_do[" + i + "].id", item[i].id);
    } else if (item[i].type == "Node") {
      localStorage.setItem("Node[" + i + "].type", item[i].type);
      localStorage.setItem("Node[" + i + "].title", item[i].title);
      localStorage.setItem("Node[" + i + "].description", item[i].description);
      localStorage.setItem("Node[" + i + "].id", item[i].id);
    } else if (item[i].type == "Project") {
      localStorage.setItem("Project[" + i + "].type", item[i].type);
      localStorage.setItem("Project[" + i + "].title", item[i].title);
      localStorage.setItem("Project[" + i + "].id", item[i].id);
    }
  }
}

function loadItems() {
  let item = [],
    helpindex,
    todos = [],
    nodes = [],
    projects = [];

  if (localStorage == null) return item;

  for (let i = 0; i < 8; i++) {
    todos[i] = "";
    nodes[i] = "";
    projects[i] = "";
  }

  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).split("[")[0] == "To_do") {
      helpindex = localStorage.key(i).split("[")[1].split("]")[0];
      for (let j = 0; j < localStorage.length; j++) {
        if (localStorage.key(j).split("[")[1].split("]")[0] == helpindex) {
          if (localStorage.key(j).split(".")[1] == "type") {
            todos[0] = localStorage.getItem(localStorage.key(j));
          } else if (localStorage.key(j).split(".")[1] == "title") {
            todos[1] = localStorage.getItem(localStorage.key(j));
          } else if (localStorage.key(j).split(".")[1] == "description") {
            todos[2] = localStorage.getItem(localStorage.key(j));
          } else if (localStorage.key(j).split(".")[1] == "project") {
            todos[3] = localStorage.getItem(localStorage.key(j));
          } else if (localStorage.key(j).split(".")[1] == "date") {
            todos[4] = localStorage.getItem(localStorage.key(j));
          } else if (localStorage.key(j).split(".")[1] == "priority") {
            todos[5] = localStorage.getItem(localStorage.key(j));
          } else if (localStorage.key(j).split(".")[1] == "id") {
            todos[6] = localStorage.getItem(localStorage.key(j));
          } else if (localStorage.key(j).split(".")[1] == "done") {
            todos[7] = localStorage.getItem(localStorage.key(j));
            if (todos[7] == "true") todos[7] = true;
            else if (todos[7] == "false") todos[7] = false;
          }
          localStorage.removeItem(localStorage.key(j));

          j = -1;
        }
        i = 0;
      }
      item.push(
        new addToDo(
          todos[0],
          todos[1],
          todos[2],
          todos[3],
          todos[4],
          todos[5],
          todos[6],
          todos[7]
        )
      );
    } else if (localStorage.key(i).split("[")[0] == "Node") {
      helpindex = localStorage.key(i).split("[")[1].split("]")[0];
      for (let j = 0; j < localStorage.length; j++) {
        if (localStorage.key(j).split("[")[1].split("]")[0] == helpindex) {
          if (localStorage.key(j).split(".")[1] == "type") {
            nodes[0] = localStorage.getItem(localStorage.key(j));
          } else if (localStorage.key(j).split(".")[1] == "title") {
            nodes[1] = localStorage.getItem(localStorage.key(j));
          } else if (localStorage.key(j).split(".")[1] == "description") {
            nodes[2] = localStorage.getItem(localStorage.key(j));
          } else if (localStorage.key(j).split(".")[1] == "id") {
            nodes[3] = localStorage.getItem(localStorage.key(j));
          }
          localStorage.removeItem(localStorage.key(j));

          j = -1;
        }
        i = 0;
      }
      item.push(new addNode(nodes[0], nodes[1], nodes[2], nodes[3]));
    } else if (localStorage.key(i).split("[")[0] == "Project") {
      helpindex = localStorage.key(i).split("[")[1].split("]")[0];
      for (let j = 0; j < localStorage.length; j++) {
        if (localStorage.key(j).split("[")[1].split("]")[0] == helpindex) {
          if (localStorage.key(j).split(".")[1] == "type") {
            projects[0] = localStorage.getItem(localStorage.key(j));
          } else if (localStorage.key(j).split(".")[1] == "title") {
            projects[1] = localStorage.getItem(localStorage.key(j));
          } else if (localStorage.key(j).split(".")[1] == "id") {
            projects[2] = localStorage.getItem(localStorage.key(j));
          }
          localStorage.removeItem(localStorage.key(j));

          j = -1;
        }
        i = 0;
      }
      item.push(new addProject(projects[0], projects[1], projects[2]));
    }
  }
  storeItems(item);
  return item;
}

export { storeItems, loadItems };
