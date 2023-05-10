import { format } from "date-fns";

class addToDo {
  constructor(type, title, description, project, date, priority, id) {
    this.type = type;
    this.title = title.value;
    this.description = description.value;
    this.project = project.value;
    this.priority = priority.value;
    if (date.value == "") {
      this.date = format(new Date(), "dd/MM/yyyy");
    } else {
      let newdate = date.value.split("-");
      this.date = format(
        new Date(newdate[1] + "-" + newdate[2] + "-" + newdate[0]),
        "dd/MM/yyyy"
      );
    }
    this.done = false;
    this.id = id;
  }
}
class addProject {
  constructor(type, title, id) {
    this.type = type;
    this.title = title.value;
    this.id = id;
  }
}
class addNode {
  constructor(type, title, description, id) {
    this.type = type;
    this.title = title.value;
    this.description = description.value;
    this.id = id;
  }
}

export { addToDo, addProject, addNode };
