import "../../dist/Styles/styles.css";

function createbody() {
  const body = document.querySelector("body");
  body.innerHTML = `
  <div class="image"></div>
  <div class="container">
    <div class="sidebar">
      <div class="todos">
        <div class="todo">To-Dos</div>
        <div class="time" id="today">Today</div>
        <div class="time" id="week">Week</div>
        <div class="time" id="month">Month</div>
        <div class="time" id="year">Year</div>
        <div class="time" id="all">All</div>
      </div>
      <div class="projects">Projects</div>
      <div class="nodes">Nodes</div>
      <div class="addItem">
        <button title="Add Item" id="newItemButton">+</button>
      </div>
    </div>
    <div class="content">
      <div class="item">
        <div class="start">
          <input type="checkbox" id="done" />
          <div id="title">sport</div>
        </div>
        <div class="end">
          <div id="description">Details</div>
          <div id="date">20.04.22</div>
          <i class="fa-solid fa-pen-to-square" id="edit"></i>
          <i class="fa-solid fa-trash" id="delete"></i>
        </div>
      </div>
    </div>
  </div>
  <dialog id="what_to_add">
    <form action="..." method="dialog">
      <div class="radiobutton">
        <h3>Wich type of Item do you want to add?</h3>
        <div>
          <input type="radio" name="add" value="To_do" checked>To do<br>
          <input type="radio" name="add" value="Node">Node<br>
          <input type="radio" name="add" value="Project">Project<br>
        <div>
        <div
          class="formelement"
          style="padding-top: 10px; justify-content: center;gap:10px;"
        >
          <button type="submit" id="addTypeButton">Submit</button>
          <button id="cancel">Cancel</button>
        </div>
    </form>
  </dialog>
  <dialog id="toDo">
    <form action="..." method="dialog" id="newToDo">
      <div class="formelement">
        <label for="title">Title</label>
        <textarea id="title" rows="1" name="title"></textarea>
      </div>
      <div class="formelement">
        <label for="description">Description</label>
        <textarea rows="3" id="description" name="description"></textarea>
      </div>
      <div class="formelement">
        Project
        <select name="project" id="choice">
          <option value="None">None</option>
        </select>
      </div>
      <div class="formelement">
        <label for="date">Due Date</label>
        <input type="date" id="date" name="date" />
      </div>
      <div class="formelement">
        Prioritylevel
        <select name="priority">
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      <div
        class="formelement"
        style="padding-top: 20px; justify-content: space-evenly"
      >
        <button type="submit" id="addToDoButton">Submit</button>
        <button id="cancel">Cancel</button>
      </div>
    </form>
  </dialog>
  
  <dialog id="project">
    <form action="..." method="dialog" id="newProject">
      <div class="formelement">
        <label for="project">Project</label>
        <textarea id="project" rows="1" name="project"></textarea>
      </div>
      <div
        class="formelement"
        style="padding-top: 20px; justify-content: space-evenly"
      >
        <button type="submit" id="addProjectButton">Submit</button>
        <button id="cancel">Cancel</button>
      </div>
    </form>
  </dialog>

  <dialog id="node">
    <form action="..." method="dialog" id="newNode">
      <div class="formelement">
        <label for="title">Title</label>
        <textarea id="title" rows="1" name="title"></textarea>
      </div>
      <div class="formelement">
        <label for="description">Description</label>
        <textarea rows="3" id="description" name="description"></textarea>
      </div>
      <div
        class="formelement"
        style="padding-top: 20px; justify-content: space-evenly"
      >
        <button type="submit" id="addNodeButton">Submit</button>
        <button id="cancel">Cancel</button>
      </div>
    </form>
  </dialog>
  
  <dialog id="toDoEdit">
    <form action="..." method="dialog" id="editToDo">
      <div class="formelement">
        <label for="title">Title</label>
        <textarea id="title" rows="1" name="title"></textarea>
      </div>
      <div class="formelement">
        <label for="description">Description</label>
        <textarea rows="3" id="description" name="description"></textarea>
      </div>
      <div class="formelement">
        Project
        <select name="project" id="choice">
          <option value="None">None</option>
        </select>
      </div>
      <div class="formelement">
        <label for="date">Due Date</label>
        <input type="date" id="date" name="date" />
      </div>
      <div class="formelement">
        Prioritylevel
        <select name="priority">
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      <div
        class="formelement"
        style="padding-top: 20px; justify-content: space-evenly"
      >
        <button type="submit" id="editToDoButton">Edit</button>
        <button id="cancel">Cancel</button>
      </div>
    </form>
  </dialog>
  
  <dialog id="descriptionModal">
  </dialog>`;
}
function addProjectToForm(title) {
  const choice = document.getElementById("choice");
  const project = document.createElement("option");
  project.setAttribute("value", String(title));
  project.textContent = String(title);
  choice.appendChild(project);
}
export { createbody, addProjectToForm };
