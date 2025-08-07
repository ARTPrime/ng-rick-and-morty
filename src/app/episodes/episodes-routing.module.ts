import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeListComponent } from './components/episode-list-component/episode-list.component';
import { EpisodeDetailComponent } from './components/episode-detail-component/episode-detail.component';
import { NotFoundComponent } from '../shared/not-found-component/not-found-component';

const routes: Routes = [
  {
    path: '',
    component: EpisodeListComponent,
  },
  {
    path: ':id',
    component: EpisodeDetailComponent,
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
export class EpisodesRoutingModule {}
