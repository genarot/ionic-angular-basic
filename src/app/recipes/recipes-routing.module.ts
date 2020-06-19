import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesPage } from './recipes.page';
import {RecipesService} from '../_services/recipes.service';

const routes: Routes = [
  {
    path: '',
    component: RecipesPage
  },
  {
    path: ':recipeId',
    loadChildren: () => import('./recipe-detail/recipe-detail.module').then( m => m.RecipeDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [RecipesService],
  exports: [RouterModule],
})
export class RecipesPageRoutingModule {}
