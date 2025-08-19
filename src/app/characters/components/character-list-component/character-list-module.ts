import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './character-list.component';
import { SharedModule } from '../../../shared/shared-module';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [CharacterListComponent],
  imports: [CommonModule, SharedModule, RouterLink],
  exports: [CharacterListComponent],
})
export class CharacterListModule {}
