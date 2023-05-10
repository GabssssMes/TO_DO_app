class addToDo {
  constructor(type, title, description, project, date, priority, id) {
    this.type = type;
    this.title = title.value;
    this.description = description.value;
    this.project = project.value;
    this.priority = priority.value;
    if (date.value == "") this.date = "--No_Date-";
    else this.date = date.value;
    this.done = false;
    this.id = id;
  }
}
class addProject {
  constructor(type, title) {
    this.type = type;
    this.title = title.value;
  }
}
class addNode {
  constructor(type, title, description) {
    this.type = type;
    this.title = title.value;
    this.description = description.value;
  }
}

export { addToDo, addProject, addNode };
