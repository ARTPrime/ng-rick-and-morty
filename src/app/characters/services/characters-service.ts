import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CharactersService {
  private readonly path = 'character';

  constructor(private httpClient: HttpClient) {}

  public getCharacters(page?: number) {
    const url = `${environment.apiRoot}/${this.path}`;

    return this.httpClient.get(page ? `${url}/?page=${page}` : url);
  }
}
