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
  selector: 'app-add-car',
  standalone: true,
  imports: [MatFormFieldModule,MatButtonModule,FormsModule,CommonModule , MatInputModule, MatSelectModule],
  templateUrl: './add-car.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent {

  marcaSelect!: MarcasSelect[];
  modeloSelect!: ModelosSelect[];
  vehDescripcion:string = '';
  modId:number = 0;
  marId:number = 0;
  vehiculosUpdate!: VehiculosUpdate[];

  constructor( private service: ServiceService, private router: Router) { }
 
    ngOnInit(): void {
      this.getMarcasSelect();
    }

    getMarcasSelect(){
      this.service.getMarcas().subscribe(data => {
        this.marcaSelect = data;
        this.marId = data[0].marId;
      })      
    }

    getModelosSelect(id: number){
      console.log(id);
      this.service.getModelos(id).subscribe(data => {
        this.modeloSelect = data;
        this.marId = id;
      });
      console.log(this.modeloSelect)
    }

    idModeloSelect(id: number){
      this.modId = id;
    }

    addCar(){
      this.vehiculosUpdate =[{
        vehId: 10,
        marId:  this.marId,
        modId: this.modId,
        vehDecripcion: this.vehDescripcion,
        año: 0,
        precio: 0,
        estatus: '' 
      }]
      
      this.service.createCar(this.vehiculosUpdate).subscribe(data => {
        console.log(data);
      });
   
        this.router.navigate(['/carTable']);
      
    }   
}
