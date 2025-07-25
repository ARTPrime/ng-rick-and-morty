import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found-component/not-found-component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule],
  providers: [provideHttpClient()],
})
export class SharedModule {}
