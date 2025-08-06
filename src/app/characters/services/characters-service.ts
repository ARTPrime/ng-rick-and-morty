import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { PaginatedResponse } from '../../models/paginated-response';
import { Character } from '../../models/character';

@Injectable({ providedIn: 'root' })
export class CharactersService {
  private readonly path = 'character';

  constructor(private httpClient: HttpClient) {}

  public getCharacters(
    page?: number
  ): Observable<PaginatedResponse<Character>> {
    const url = `${environment.apiRoot}/${this.path}`;

    return this.httpClient.get<PaginatedResponse<Character>>(
      page ? `${url}/?page=${page}` : url
    );
  }
}
