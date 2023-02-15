import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './generic/auth.guard';
import { ChatpageComponent } from './pages/chatpage/chatpage.component';
import { FormprodottoComponent } from './pages/formprodotto/formprodotto.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PaginaCategorieComponent } from './pages/pagina-categorie/pagina-categorie.component';
import { PaginaProdottoComponent } from './pages/pagina-prodotto/pagina-prodotto.component';
import { RegistrazioneComponent } from './pages/registrazione/registrazione.component';

const routes: Routes = [
  {
    path:'chat',
    // canActivate:[AuthGuard],
    component:ChatpageComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'creaprodotto',
    canActivate:[AuthGuard],
    component:FormprodottoComponent
  },
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
