import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing-module';
import { LocationDetailComponent } from './components/location-detail-component/location-detail-component';
import { LocationListComponent } from './components/location-list-component/location-list-component';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  declarations: [LocationDetailComponent, LocationListComponent],
  imports: [CommonModule, LocationsRoutingModule, SharedModule],
})
export class LocationsModule {}
