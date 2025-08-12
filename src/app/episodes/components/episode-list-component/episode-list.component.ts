import { Component, OnInit, signal } from '@angular/core';
import {
  PagionationInfo,
  PaginatedResponse,
} from '../../../models/paginated-response';
import { Episode } from '../../../models/episodes';
import { trackByPropertyName } from '../../../functions/track-by-item-id';
import { EpisodesService } from '../../services/episodes.service';
import { take } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-episode-list-component',
  standalone: false,
  templateUrl: './episode-list.component.html',
  styleUrl: './episode-list.component.scss',
})
export class EpisodeListComponent implements OnInit {
  public paginationInfo = signal<PagionationInfo>({
    count: 0,
    next: '',
    prev: '',
    pages: 0,
  });

  public episodes = signal<Episode[]>([]);
  public trackByItemId = (index: number, item: Episode) =>
    trackByPropertyName(index, item, 'id');

  constructor(private episodesService: EpisodesService) {}

  /**
   * Inits component data
   */
  public ngOnInit(): void {
    this.episodesService
      .getEpisodes()
      .pipe(take(1))
      .subscribe((response: PaginatedResponse<Episode>) => {
        this.paginationInfo.set(response.info);
        this.episodes.set(response.results);
      });
  }

  public onPageEvent(pageEvent: PageEvent) {
    this.episodesService
      .getEpisodes(pageEvent.pageIndex + 1)
      .pipe(take(1))
      .subscribe((response: PaginatedResponse<Episode>) => {
        this.paginationInfo.set(response.info);
        this.episodes.set(response.results);
      });
  }
}
