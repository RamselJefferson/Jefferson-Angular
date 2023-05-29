import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCarComponent } from './components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Jefferson-Angular';
    /**
     *
     */
    constructor(public dialog:MatDialog) {
    
      
    }

}
