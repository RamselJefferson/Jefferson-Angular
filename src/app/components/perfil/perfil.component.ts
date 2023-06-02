import { Component } from '@angular/core';
import { ToolbarComponent } from '../toolbar';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [ToolbarComponent],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {
  name = 'Alejandra Giraldo';
  following = 5001;
  followers = 10002;

  strengths = [{ text: 'English', level: 'Basic' }, { text: 'HTML', level: 'High' }, { text: 'Testing', level: 'Low' }];

  people = [
    {
      "name": "Vanessa M.",
      "age": 16,
      "color": 'red'
    },
    {
      "name": "Carlos Angulo",
      "age": 25,
      "color": 'green'
    },
    {
      "name": "Maleja",
      "age": 21,
      "color": 'pink'
    }
  ];
}
