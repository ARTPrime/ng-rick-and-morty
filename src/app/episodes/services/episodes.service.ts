import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { PaginatedResponse } from '../../models/paginated-response';
import { Episode } from '../../models/episodes';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EpisodesService {
  private path = `${environment.apiRoot}/episode`;

  constructor(private httpClient: HttpClient) {}

  public getAllEpisodes(page?: number): Observable<PaginatedResponse<Episode>> {
    return this.httpClient.get<PaginatedResponse<Episode>>(
      page ? `${this.path}/?page=${page}` : this.path
    );
  }

  public getEpisode(id: number): Observable<Episode> {
    return this.httpClient.get<Episode>(`${this.path}/${id}`);
  }

  public getEpisodes(ids: number[]): Observable<Episode[]> {
    return this.httpClient.get<Episode[]>(`${this.path}/[${ids.join(',')}]`);
  }
}
