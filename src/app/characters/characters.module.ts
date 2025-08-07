import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterListComponent } from './components/character-list-component/character-list.component';
import { CharacterDetailComponent } from './components/character-detail-component/character-detail.component';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  declarations: [CharacterListComponent, CharacterDetailComponent],
  imports: [CommonModule, CharactersRoutingModule, SharedModule],
  providers: [],
})
export class CharactersModule {}
