import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from 'src/app/components';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';




@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ToolbarComponent,
    MatProgressSpinnerModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { 
  constructor() {

  }
}
