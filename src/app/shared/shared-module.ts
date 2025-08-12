import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found-component/not-found-component';
import { provideHttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule],
  exports: [MatCardModule, MatIconModule, MatPaginatorModule],
  providers: [provideHttpClient()],
})
export class SharedModule {}
