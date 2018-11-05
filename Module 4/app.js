const todo = require("./todo");
const connection = require("./mongoConnection");

const main = async () => {

  let title = "Ponder Dinosaurs";
  let desc = "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?";
  const task1 = await todo.createTask(title, desc);
  console.log("\nTask titled: " + title + " has  been added.");
  console.log(task1);

  title = "Play Pokemon with Twitch TV";
  desc = "Should we revive Helix?";
  const task2 = await todo.createTask(title, desc);
  console.log("\nTask titled: " + title + " has been added");
  console.log(task2);

  let allTasks1 = await todo.getAllTasks();
  console.log("\nPrinting all tasks:");
  for (let i = 0; i < allTasks1.length; i++) {
    console.log(allTasks1[i]);
  }

  await todo.removeTask(task1._id);
  console.log("\nTask removed successfully.");

  let allTasks2 = await todo.getAllTasks();
  console.log("\nPrinting all tasks:");
  for (let i = 0; i < allTasks2.length; i++) {
    console.log(allTasks2[i]);
  }

  let completedTask = await todo.completeTask(task2._id);
  let completedTaskbyID = await todo.getTask(completedTask._id);
  console.log("\nPrinting completed task:")
  console.log(completedTaskbyID);

  const db = await connection();
  await db.serverConfig.close();

  console.log("\nDone!");
};

main().catch(error => {
  console.log(error);
});
