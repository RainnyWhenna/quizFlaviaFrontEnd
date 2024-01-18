import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroTesteComponent } from './pages/cadastroTeste/cadastroTeste.component';
import { HomeComponent } from './pages/home/home.component';
import { TestesComponent } from './pages/testes/testes.component';
import { ResultadosComponent } from './pages/resultados/resultados.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'TesteMaturidadeLinkedin', component: CadastroTesteComponent},
  {path: 'Teste', component: TestesComponent},
  {path: 'ResultadosTeste', component: ResultadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
