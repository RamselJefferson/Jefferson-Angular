import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PeopleTableComponent } from "./components/people-table/people-table.component";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddCarComponent } from './components/people-table/add-car/add-car.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EditCarComponent } from './components/people-table/edit-car/edit-car.component';



@NgModule({
    declarations: [
        AppComponent        
  
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        MatFormFieldModule,
        HttpClientModule,FormsModule,
        AddCarComponent,
        EditCarComponent,
        AppRoutingModule,
        BrowserAnimationsModule,
        ToolbarComponent,
        PeopleTableComponent
    ]
})
export class AppModule { }
