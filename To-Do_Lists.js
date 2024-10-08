let todo = [];

let req = prompt("Please enter your request");

while (true) {
  if (req == "quit") {
    console.log("Exiting from to-do");
    break;
  }

  if (req == "list") {
    console.log("------");
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
    console.log("------");
  } else if (req == "add") {
    let task = prompt("Enter the task to add");
    todo.push(task);
    console.log("Task added successfully");
  } else if (req == "delete") {
    let idx = prompt("Enter the task index number to delete");
    todo.splice(idx, 1);
    console.log("Task deleted");
  } else {
    console.log("Invalid command. Please try again.");
  }

  req = prompt("Please enter your request");
}
