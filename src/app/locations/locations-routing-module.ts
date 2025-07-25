import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationListComponent } from './components/location-list-component/location-list-component';
import { LocationDetailComponent } from './components/location-detail-component/location-detail-component';
import { NotFoundComponent } from '../shared/not-found-component/not-found-component';

const routes: Routes = [
  {
    path: '',
    component: LocationListComponent,
  },
  {
    path: ':id',
    component: LocationDetailComponent,
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
export class LocationsRoutingModule {}
