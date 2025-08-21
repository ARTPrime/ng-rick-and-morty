import {
  Component,
  DestroyRef,
  HostListener,
  OnInit,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CharactersService } from '../../services/characters.service';
import { switchMap, take } from 'rxjs';
import { Character } from '../../../models/character';
import { EpisodesService } from '../../../episodes/services/episodes.service';
import { Episode } from '../../../models/episodes';

@Component({
  selector: 'app-character-detail-component',
  standalone: false,
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.scss',
})
export class CharacterDetailComponent implements OnInit {
  @HostListener('click', ['$event.target!']) onClick(target: EventTarget) {
    const element = target as HTMLElement;
    if (element?.localName === 'app-character-detail-component') {
      this.onCloseDetail();
    }
  }

  public characterData = signal<Character | null>(null);

  public characterEpisodes = signal<Episode[]>([]);

  public get characterOriginId(): string | null {
    const url = this.characterData()?.origin?.url ?? null;
    return url ? url.substring(url.lastIndexOf('/') + 1) : null;
  }

  public get characterLastLocationId(): string | null {
    const url = this.characterData()?.location?.url ?? null;
    return url ? url.substring(url.lastIndexOf('/') + 1) : null;
  }

  constructor(
    private route: ActivatedRoute,
    private destroyRef: DestroyRef,
    private charactersService: CharactersService,
    private episodesService: EpisodesService,
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
        this.loadCharacterEpisodes(this.characterData()!);
      });
  }

  public onCloseDetail() {
    this.router.navigate(['characters']);
  }

  private loadCharacterEpisodes(character: Character) {
    const episodesIds = character.episode.map((item) =>
      Number(item.substring(item.lastIndexOf('/') + 1))
    );

    this.getCharacterEpisodesDetail(episodesIds.slice(0, 4));
  }

  private getCharacterEpisodesDetail(episodes: number[]) {
    this.episodesService
      .getEpisodes(episodes)
      .pipe(take(1))
      .subscribe((episodes) => this.characterEpisodes.set(episodes));
  }
}
