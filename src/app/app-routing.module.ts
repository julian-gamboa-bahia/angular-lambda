/*

*/


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componente para classificar as NOVAS fotos

import { NovosComponent } from './components/novos/novos.component';

//Componente para ver a lista de pastas que funcionam como ETIQUETAS

import { ListaPastasComponent } from './components/lista-pastas/lista-pastas.component';


const routes: Routes = [
  //Por exempl,o "http://localhost:4200" lista as ETIQUETAS (pastas criadas na pasta de etiquetas)
  { path: '', component: ListaPastasComponent },
  //Por exempl,o "http://localhost:4200/livros" visualiza as fotos presentas em LIVROS
  { path: ':parametro', component: NovosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

  
}
