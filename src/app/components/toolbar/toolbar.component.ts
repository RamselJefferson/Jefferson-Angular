import { Component } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { PeopleTableComponent } from '../people-table';
import { AddCarComponent } from '../people-table/add-car/add-car.component';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [MatToolbarModule, MatIconModule,MatDialogModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
  
})
export class ToolbarComponent {

constructor(public dialog:MatDialog, private router: Router) {

 
}


logout(){
  localStorage.removeItem('key');
  this.router.navigate(['../home']);

}
perfil(){
  this.router.navigate(['../perfil']);
}

contenido(){
  this.router.navigate(['../contenido']);
}

ngOnInit(): void {}
}
