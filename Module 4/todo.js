const mongoCollections = require("./mongoCollections");
const uuidv4 = require('uuid/v4');
const todoItems = mongoCollections.todoItems;

module.exports = {
  async getTask(id) {
    if (!id)
      throw "You must provide an id to search for";

    const todoCollection = await todoItems();
    const task = await todoCollection.findOne({ _id: id });
    if (task === null)
      throw "No task with that id";

    return task;
  },

  async getAllTasks() {
    const todoCollection = await todoItems();
    const tasks = await todoCollection.find({}).toArray();

    return tasks;
  },

  async createTask(title, description) {
    if (!title)
      throw "You must provide a name for your Task";

    if (!description)
      throw "You must provide a description";

    const todoCollection = await mongoCollections.todoItems();

    let newToDo = {
      _id: uuidv4(),
      title: title,
      description: description,
      completed: false,
      completedAt: null
    };

    const insertInfo = await todoCollection.insertOne(newToDo);
    if (insertInfo.insertedCount === 0)
      throw "Could not add task";

    const newId = insertInfo.insertedId;

    const task = await this.getTask(newId);
    return task;
  },
  async removeTask(id) {
    if (!id)
      throw "You must provide an id to search for";

    const todoCollection = await todoItems();
    const deletionInfo = await todoCollection.removeOne({ _id: id });

    if (deletionInfo.deletedCount === 0) {
      throw `Could not delete task with id of ${id}`;
    }
  },
  async completeTask(taskId) {
    if (!taskId)
      throw "You must provide an id to search for";

    const task = await this.getTask(taskId);
    const title = task.title;
    const description = task.description;
    const time = new Date();

    const updatedTask = {
      _id: taskId,
      title: title,
      description: description,
      completed: true,
      completedAt: time
    };

    const todoCollection = await todoItems();
    const updatedInfo = await todoCollection.updateOne({ _id: taskId }, { $set: { completed: true, completedAt: time } });

    if (updatedInfo.modifiedCount === 0) 
      throw "Could not update task successfully";
    
    return await this.getTask(taskId);
  }
};
