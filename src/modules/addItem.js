import { format } from "date-fns";

class addToDo {
  constructor(type, title, description, project, date, priority, id, done) {
    this.type = type;

    if (typeof title == "string") this.title = title;
    else this.title = title.value;

    if (typeof description == "string") this.description = description;
    else this.description = description.value;

    if (typeof project == "string") this.project = project;
    else this.project = project.value;

    if (typeof priority == "string") this.priority = priority;
    else this.priority = priority.value;

    if (date.value == "") {
      this.date = format(new Date(), "dd/MM/yyyy");
    } else {
      if (typeof date == "string") {
        let newdate = date.split("/");
        this.date = format(
          new Date(newdate[1] + "-" + newdate[0] + "-" + newdate[2]),
          "dd/MM/yyyy"
        );
      } else {
        let newdate = date.value.split("-");
        this.date = format(
          new Date(newdate[1] + "-" + newdate[2] + "-" + newdate[0]),
          "dd/MM/yyyy"
        );
      }
    }

    this.done = done;
    this.id = id;
  }
}
class addProject {
  constructor(type, title, id) {
    this.type = type;
    if (typeof title == "string") this.title = title;
    else this.title = title.value;
    this.id = id;
  }
}
class addNode {
  constructor(type, title, description, id) {
    this.type = type;
    if (typeof title == "string") this.title = title;
    else this.title = title.value;
    if (typeof description == "string") this.description = description;
    else this.description = description.value;
    this.id = id;
  }
}

export { addToDo, addProject, addNode };
