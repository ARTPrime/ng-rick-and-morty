import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { PaginatedResponse } from '../../models/paginated-response';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LocationsService {
  private path = `${environment.apiRoot}/location`;

  constructor(private httpClient: HttpClient) {}

  public getLocations(page?: number): Observable<PaginatedResponse<Location>> {
    return this.httpClient.get<PaginatedResponse<Location>>(
      page ? `${this.path}/?page=${page}` : this.path
    );
  }

  public getLocation(id: number): Observable<Location> {
    return this.httpClient.get<Location>(`${this.path}/${id}`);
  }
}
