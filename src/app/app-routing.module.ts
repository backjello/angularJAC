import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PaginaCategorieComponent } from './pagina-categorie/pagina-categorie.component';
import { PaginaProdottoComponent } from './pagina-prodotto/pagina-prodotto.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';

const routes: Routes = [
  {
    path: "prodotto/:id",
    component: PaginaProdottoComponent
  },
  {
    path:'home/categorie/:categoria',
    component:HomeComponent
  },
  {
    path:'home/:ricerca',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'categorie',
    component:PaginaCategorieComponent
  },
  {
    path:'registrazione',
    component:RegistrazioneComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
