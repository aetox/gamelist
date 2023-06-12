import { Routes } from '@angular/router';
import { MovielistAddFormComponent } from './movielist/movielist-add-form/movielist-add-form.component';
import { MovielistComponent } from './movielist/movielist.component';

export const routes: Routes = [
    {
        path:'',
        component:MovielistComponent,
        title:'Accueil'
    },
    {
        path:'addGame',
        component:MovielistAddFormComponent,
        title:'Ajouter un jeu'
    }
];
