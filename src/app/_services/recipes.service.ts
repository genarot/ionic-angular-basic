import {Injectable} from '@angular/core';
import {Recipe} from '../recipes/recipe.model';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class RecipesService {
    recipes: Recipe[] = [
        {
            id: 'r1',
            title: 'Schnitzel',
            imageUrl: 'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',
            ingredients: ['French Fries', 'Pork Meat', 'Salad']
        },
        {
            id: 'r2',
            title: 'San Jacobo',
            imageUrl: 'https://www.annarecetasfaciles.com/files/san-jacobos-2.jpg',
            ingredients: ['French Fries', 'Pork Meat', 'Salad']
        }
    ];
    onRecipesChange = new Subject<Recipe[]>()

    addRecipe(newRecipe: Recipe) {
        this.recipes.push(newRecipe);
        this.onRecipesChange.next(this.recipes);
    }

    getAllRecipes() {
        return [...this.recipes];
    }

    getRecipe(recipeId: string) {
        return this.recipes.find(r => r.id === recipeId);
    }

    deleteRecipe(recipeId: string) {
        this.recipes = this.recipes.filter(re => re.id !== recipeId);
        this.onRecipesChange.next(this.recipes);
    }
}
