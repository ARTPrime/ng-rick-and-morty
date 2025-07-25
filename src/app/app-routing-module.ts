import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.js';
import { NotFoundComponent } from './shared/not-found-component/not-found-component.js';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  // Lazy loading feature modules
  {
    path: 'characters',
    loadChildren: () =>
      import('./characters/characters-module.js').then(
        (charactersModule) => charactersModule.CharactersModule
      ),
  },
  {
    path: 'episodes',
    loadChildren: () =>
      import('./episodes/episodes-module.js').then(
        (episodesModule) => episodesModule.EpisodesModule
      ),
  },
  {
    path: 'locations',
    loadChildren: () =>
      import('./locations/locations-module.js').then(
        (locationsModule) => locationsModule.LocationsModule
      ),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
