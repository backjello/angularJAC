import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProdottoComponent } from './prodotto/prodotto.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatDialogModule } from '@angular/material/dialog';
import { CarelloComponent } from './carello/carello.component'
import { MatTableModule } from "@angular/material/table"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltriComponent } from './filtri/filtri.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select';
import { PaginaProdottoComponent } from './pagina-prodotto/pagina-prodotto.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CarPreButtonComponent } from './car-pre-button/car-pre-button.component'
import { NgImageSliderModule } from 'ng-image-slider';
import { PaginaCategorieComponent } from './pagina-categorie/pagina-categorie.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { RecensioneComponent } from './recensione/recensione.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormprodottoComponent } from './formprodotto/formprodotto.component';
import { MatChipsModule } from '@angular/material/chips';
import { LoginComponent } from './login/login.component';
import { TokenInterceptor } from './token.interceptor';
import { ErrorInterceptor } from './error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ProdottoComponent,
    CarelloComponent,
    FiltriComponent,
    PaginaProdottoComponent,
    NotFoundComponent,
    HomeComponent,
    HeaderComponent,
    CarPreButtonComponent,
    PaginaCategorieComponent,
    CategoriaComponent,
    RecensioneComponent,
    RegistrazioneComponent,
    FormprodottoComponent,
    LoginComponent
  ],
  imports: [

    MatChipsModule,
    MatRadioModule,
    MatCheckboxModule,
    NgImageSliderModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatDialogModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
