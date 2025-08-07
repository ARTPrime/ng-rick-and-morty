import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found-component/not-found-component';
import { provideHttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, MatCardModule],
  exports: [MatCardModule],
  providers: [provideHttpClient()],
})
export class SharedModule {}
