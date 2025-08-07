import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { PaginatedResponse } from '../../models/paginated-response';
import { Character } from '../../models/character';

@Injectable({ providedIn: 'root' })
export class CharactersService {
  private path = `${environment.apiRoot}/character`;

  constructor(private httpClient: HttpClient) {}

  public getCharacters(
    page?: number
  ): Observable<PaginatedResponse<Character>> {
    return this.httpClient.get<PaginatedResponse<Character>>(
      page ? `${this.path}/?page=${page}` : this.path
    );
  }

  public getCharacter(id: number): Observable<Character> {
    return this.httpClient.get<Character>(`${this.path}/${id}`);
  }
}
