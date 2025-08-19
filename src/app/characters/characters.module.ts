import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { CharacterDetailModule } from './components/character-detail-component/character-detail-module';
import { CharacterListModule } from './components/character-list-component/character-list-module';

@NgModule({
  declarations: [CharactersComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    CharacterDetailModule,
    CharacterListModule,
  ],
  providers: [],
})
export class CharactersModule {}
