import { Component, DestroyRef, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CharactersService } from '../../services/characters.service';
import { switchMap } from 'rxjs';
import { Character } from '../../../models/character';

@Component({
  selector: 'app-character-detail-component',
  standalone: false,
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.scss',
})
export class CharacterDetailComponent implements OnInit {
  public characterData = signal<Character | null>(null);

  constructor(
    private route: ActivatedRoute,
    private destroyRef: DestroyRef,
    private charactersService: CharactersService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.route.paramMap
      .pipe(
        // Cerrar la subscripción hasta que mi componente sea destruido
        takeUntilDestroyed(this.destroyRef),
        // Espera a que el observable que regresamos, termine su ejecución
        switchMap((param: ParamMap) =>
          this.charactersService.getCharacter(Number(param.get('id')))
        )
      )
      .subscribe((character: Character) => {
        this.characterData?.set(character);
      });
  }

  public onCloseDetail() {
    this.router.navigate(['characters']);
  }
}
