import { SucessoCadastroComponent } from './sucesso-cadastro/sucesso-cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'signup',
  },
  {
    path: 'signup',
    component: CadastroComponent
  },
  {
    path: 'success',
    component: SucessoCadastroComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
