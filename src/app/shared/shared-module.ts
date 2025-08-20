import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found-component';
import { provideHttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { PaginatorModule } from './paginator/paginator.module-module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule],
  exports: [MatCardModule, MatIconModule, PaginatorModule, MatButtonModule],
  providers: [provideHttpClient()],
})
export class SharedModule {}
