import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodeListComponent } from './components/episode-list-component/episode-list.component';
import { EpisodeDetailComponent } from './components/episode-detail-component/episode-detail.component';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  declarations: [EpisodeListComponent, EpisodeDetailComponent],
  imports: [CommonModule, EpisodesRoutingModule, SharedModule],
})
export class EpisodesModule {}
