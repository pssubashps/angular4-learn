import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';


@Injectable()
export class RecipeService {

  recipes:Recipe[] =[
    new Recipe ("A Test Recipe","Test Recipe deccription","http://www.seriouseats.com/recipes/assets_c/2015/01/20150119-pressure-cooker-chicken-stew-food-lab-11-thumb-1500xauto-418088.jpg")
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

}
