import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MarcasSelect } from 'src/app/intarefaces/marcas-select';
import { ServiceService } from 'src/app/service/service.service';
import { CommonModule } from '@angular/common';
import { ModelosSelect } from 'src/app/intarefaces/modelos-select';
import { VehiculosUpdate } from 'src/app/intarefaces/vehiculos-update';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  standalone: true,
  imports: [MatFormFieldModule,MatButtonModule,FormsModule,CommonModule , MatInputModule, MatSelectModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrls: ['./edit-car.component.scss']
})
export class EditCarComponent {
  marcaSelect!: MarcasSelect[];
  modeloSelect!: ModelosSelect[];
  
  vehDescripcion:string = '';
  modId:number = 0;
  marId:number = 0;
  vehiculosUpdate!: VehiculosUpdate[];

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.getMarcasSelect();
  }


  getMarcasSelect(){
    this.service.getMarcas().subscribe(data => {
      this.marcaSelect = data;
      this.marId = data[0].marId;
    })
  }


}
