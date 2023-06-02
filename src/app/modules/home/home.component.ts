import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/intarefaces/usuario';
import { UsuarioDTO } from 'src/app/intarefaces/usuario-dto';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  nam1e: string;
  password: string;
  body?: Usuario
  loginn?: boolean;
  logeado?: boolean;
  register?: boolean;
  token: string =  "";
  error: boolean = false;
  usuarioCrear!: UsuarioDTO;
  
  constructor(private service: ServiceService,private router: Router) {
    this.nam1e = "",
    this.password = ""
    this.loginn = true;
    this.register = false;
  }

  registerr(){
    this.loginn = false;
    this.register = true;
  }

  crearUsuario(){
    this.service.crearUsuarioService(this.usuarioCrear).subscribe(data =>{
      console.log(data);
    })
  }
  loginForm(){
    this.loginn = true;
    this.register = false;
    this.nam1e = "";
    this.password = "";
    this.error = false;
  }
  ngOnInit(){
 
    this.token = localStorage.getItem('key') || ('');
      this.service.verificarToken(this.token).subscribe((data: any)=>{
        if (data.success == true){
          this.logeado = false;
          this.router.navigate(['../contenido']);
        }
    })   
  }
  login() {   
    this.body = {
      usuario: this.nam1e,
      password: this.password
    }
    this.service.login(this.body).subscribe(
      (data: any) => {
   
        console.log(data.success);
        console.log(data.message);
        console.log(data.result);
         
        if(data.success == false){
          this.error = true;
        }else{   
          this.logeado = true;
          this.loginn = false;
          this.register = false;
        }
        
        localStorage.setItem('key', data.result);
        if(data.success == true){
          
          this.router.navigate(['../contenido']);
        }
     
        
      },
      (error) => {
        console.error(error);
        
      }
    );
  }
}
