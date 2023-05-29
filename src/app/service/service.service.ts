import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehiculos } from '../intarefaces/vehiculos';
import { MarcasSelect } from '../intarefaces/marcas-select';
import { ModelosSelect } from '../intarefaces/modelos-select';
import { VehiculosUpdate } from '../intarefaces/vehiculos-update';
import { Usuario } from '../intarefaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { 

  }

  login(body: Usuario){
    return this.http.post("https://localhost:7079/api/Login/LoginMethod",body)
  }

  // verificarToken(token: string){
  //   return this.http.get(`https://localhost:7079/api/Login/ValidarToken/${token}`)
  // }

  getCar(){
    return this.http.get<Vehiculos[]>('https://localhost:7079/api/Vehiculos');
  }

  createCar(body : VehiculosUpdate[]){
     const objecto = {
        vehId: body[0].vehId,
        vehDecripcion: body[0].vehDecripcion,
        modId: body[0].modId,
        marId: body[0].marId,
        año: body[0].año,
        precio: body[0].precio,
        estatus: body[0].estatus
     }
    return this.http.post<VehiculosUpdate[]>('https://localhost:7079/api/Vehiculos',objecto);
  }
  

  getMarcas(){
    return this.http.get<MarcasSelect[]>('https://localhost:7079/api/Marcas');
  }

  getModelos(id: number){
    return this.http.get<ModelosSelect[]>(`https://localhost:7079/api/Marcas/${id}/Modelos`);
  }

  deleteCar(id: number){
    return this.http.delete(`https://localhost:7079/api/Vehiculos/${id}`);
  }
}
