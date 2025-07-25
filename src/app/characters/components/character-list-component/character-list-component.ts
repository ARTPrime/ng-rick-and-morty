import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters-service';

@Component({
  selector: 'app-character-list-component',
  standalone: false,
  templateUrl: './character-list-component.html',
  styleUrl: './character-list-component.scss',
})
export class CharacterListComponent implements OnInit {
  private page = 0;
  constructor(private charactersService: CharactersService) {}

  /**
   * Inits component data
   */
  public ngOnInit(): void {
    this.charactersService
      .getCharacters()
      .subscribe((response) => console.log(response));
  }
}
