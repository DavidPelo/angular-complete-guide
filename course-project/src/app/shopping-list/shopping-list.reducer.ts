import { Ingredient } from '../shared/ingredient.model';

const initialState = {
  ingredients: [
    new Ingredient("apples", 5),
    new Ingredient("tomatoes", 10),
  ],
};

export function shoppingListReducer(state = initialState, action) {

}