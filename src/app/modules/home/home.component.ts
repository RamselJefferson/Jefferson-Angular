import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/intarefaces/usuario';
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
  
  constructor(private service: ServiceService,private router: Router) {
    this.nam1e = "",
    this.password = ""
    this.loginn = true;
    this.register = false;
  
    this.token = localStorage.getItem('key') || '';
    // this.service.verificarToken(this.token).subscribe((data: any)=>{
    //   console.log(data);
    //   if(data.success == true){
    //     this.router.navigate(['../contenido']);
    //   }
    // })
  }

  registerr(){
    this.loginn = false;
    this.register = true;
  }

  loginForm(){
    this.loginn = true;
    this.register = false;
  }
  ngOnInit(){
    console.log(this.loginn);
    console.log(this.register);
  }
  login() {
    this.logeado = true;
    this.loginn = false;
    this.register = false;
    this.body = {
      usuario: this.nam1e,
      password: this.password
    }
    this.service.login(this.body).subscribe(
      (data: any) => {
   
        console.log(data.success);
        console.log(data.message);
        console.log(data.result);
         this.token = data.result
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
