import { AfterViewInit,Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ServiceService } from 'src/app/service/service.service';
import { Vehiculos } from 'src/app/intarefaces/vehiculos';
import { NgControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialog } from '@angular/material/dialog';
import { AddCarComponent } from './add-car';
import { EditCarComponent } from './edit-car';
import Swal from 'sweetalert2';
import { ToolbarComponent } from '../toolbar';
import { Router } from '@angular/router';





@Component({
  selector: 'app-people-table',
  standalone: true,

  imports: [CommonModule,ToolbarComponent,MatIconModule,MatToolbarModule,MatInputModule,MatPaginatorModule,MatFormFieldModule,MatTableModule],
  templateUrl: './people-table.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrls: ['./people-table.component.scss']
})
export class PeopleTableComponent  {
  token: string =  "";
  deslogeado?: boolean;
  vehiculos!: Vehiculos[];
  displayedColumns: string[] = ['vehId', 'vehDecripcion', 'marDecripcion', 'modDescripcion','acciones','accionesEditar'];
  
  dataSource =  new MatTableDataSource<Vehiculos>(this.vehiculos);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: ServiceService, private router: Router,
    public dialog:MatDialog) { }
 
  ngOnInit(): void {

     this.token = localStorage.getItem('key') || ('');
    this.service.verificarToken(this.token).subscribe((data: any)=>{
      if (data.success == false){
        this.deslogeado = true;
        this.router.navigate(['../home']);
      }
  })
    this.service.getCar().subscribe(data => {
      console.log(data);
      this.vehiculos = data;
      this.dataSource = new MatTableDataSource(this.vehiculos);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
     
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


 

  openDialog(){
    this.dialog.open(AddCarComponent,{
      width: '50%',
      height: '60%'
    });
  }

  editar(){
    this.dialog.open(EditCarComponent,{
      width: '50%',
      height: '60%'
    });
  }

  deleteCarTable(id: number){
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {

        this.service.deleteCar(id,this.token).subscribe(data => {
          console.log(data);
          this.ngOnInit();
        })
        Swal.fire('Eliminado', 'El elemento ha sido eliminado', 'success');
      }
    });
  }

}



