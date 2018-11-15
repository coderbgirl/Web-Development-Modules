const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;
const uuid = require("node-uuid");

const exportedMethods = {
  async getAllRecipes() {
    const recipeCollection = await recipes();
    const allRecipes = await recipeCollection.find(
      { },
      { _id: 1, title: 1 })
    return allRecipes.toArray();
  },
  async getRecipeById(id) {
    const recipeCollection = await recipes();
    const recipe = await recipeCollection.findOne({ _id: id });

    if (!recipe) throw "Recipe not found";
    return recipe;
  },
  async addRecipe(title, ingredients, steps) {
    if (typeof title !== "string") throw "No title provided";

    if (!Array.isArray(ingredients)) {
      ingredients = [];
    }
    if (!Array.isArray(steps)) {
      steps = [];
    }

    const recipeCollection = await recipes();

    const newRecipe = {
      _id: uuid.v4(),
      title: title,
      ingredients: ingredients,
      steps: steps      
    };

    const newInsertInformation = await recipeCollection.insertOne(newRecipe);
    const newId = newInsertInformation.insertedId;
    return await this.getRecipeById(newId);
  },
  async removeRecipe(id) {
    const recipeCollection = await recipes();
    const deletionInfo = await recipeCollection.removeOne({ _id: id });
    if (deletionInfo.deletedCount === 0) {
      throw `Could not delete recipe with id of ${id}`;
    }
  },
  async replaceRecipe(id, replacingRecipe) {
    const recipeCollection = await recipes();

    const query = {
      _id: id
    };
    await recipeCollection.updateOne(query, replacingRecipe);

    return await this.getRecipeById(id);
  },
  async updateRecipe(id, updatedRecipe) {
    const recipeCollection = await recipes();

    const updatedRecipeData = {};

    if (updatedRecipe.title) {
      updatedRecipeData.title = updatedRecipe.title;
    }

    if (updatedRecipe.ingredients) {
      updatedRecipeData.ingredients = updatedRecipe.ingredients;
    }

    if (updatedRecipe.steps) {
      updatedRecipeData.steps = updatedRecipe.steps;
    }

    let updateCommand = {
      $set: updatedRecipeData
    };
    const query = {
      _id: id
    };
    await recipeCollection.updateOne(query, updateCommand);

    return await this.getRecipeById(id);
  }
};

module.exports = exportedMethods;
