import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../shared/not-found-component/not-found-component';
import { CharacterListComponent } from './components/character-list-component/character-list.component';
import { CharacterDetailComponent } from './components/character-detail-component/character-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CharacterListComponent,
  },
  {
    path: ':id',
    component: CharacterDetailComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
