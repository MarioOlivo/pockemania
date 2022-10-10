import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PayanComponent } from "./payan/payan.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: PayanComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'pay', component: PayanComponent },


  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['']); // or redirect to default route
    };
  }
}
