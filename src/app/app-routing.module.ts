import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules';
import { PeopleTableComponent, PerfilComponent } from './components';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full' },
  { path: 'home', loadChildren: () => import ('./modules').then(m => m.HomeModule)},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
       {path: 'contenido', component: PeopleTableComponent},
       {path: 'perfil', component: PerfilComponent},
     ]),],
 
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
