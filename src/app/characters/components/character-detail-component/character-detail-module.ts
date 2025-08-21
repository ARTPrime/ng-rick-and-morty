import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailComponent } from './character-detail.component';
import { SharedModule } from '../../../shared/shared-module';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [CharacterDetailComponent],
  imports: [CommonModule, SharedModule, RouterLink],
})
export class CharacterDetailModule {}
