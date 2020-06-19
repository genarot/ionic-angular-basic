import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipesService} from '../_services/recipes.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.page.html',
    styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
    private recipes: Recipe[];
    private recipesListSubs: Subscription;

    constructor(private recipesService: RecipesService) {
    }

    ngOnDestroy(): void {
        this.recipesListSubs.unsubscribe();
    }

    ngOnInit() {
        this.recipes = this.recipesService.getAllRecipes();
        this.recipesListSubs = this.recipesService.onRecipesChange.subscribe((recipes) => {
            this.recipes = recipes;
        });
    }


}
