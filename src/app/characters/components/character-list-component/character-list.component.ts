import { Component, OnInit, signal } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { take } from 'rxjs';
import {
  PaginatedResponse,
  PagionationInfo,
} from '../../../models/paginated-response';
import { Character } from '../../../models/character';
import { trackByPropertyName } from '../../../functions/track-by-item-id';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-character-list-component',
  standalone: false,
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss',
})
export class CharacterListComponent implements OnInit {
  public paginationInfo = signal<PagionationInfo>({
    count: 0,
    next: '',
    prev: '',
    pages: 0,
  });
  public characters = signal<Character[]>([]);
  public trackByItemId = (index: number, item: Character) =>
    trackByPropertyName(index, item, 'id');

  constructor(private charactersService: CharactersService) {}

  /**
   * Inits component data
   */
  public ngOnInit(): void {
    this.charactersService
      .getCharacters()
      .pipe(take(1))
      .subscribe((response: PaginatedResponse<Character>) => {
        this.paginationInfo.set(response.info);
        this.characters.set(response.results);
      });
  }

  public onPageEvent(pageEvent: PageEvent) {
    this.charactersService
      .getCharacters(pageEvent.pageIndex + 1)
      .pipe(take(1))
      .subscribe((response: PaginatedResponse<Character>) => {
        this.paginationInfo.set(response.info);
        this.characters.set(response.results);
      });
  }
}
