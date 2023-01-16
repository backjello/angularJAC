import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { ProdottoComponent } from './prodotto/prodotto.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatDialogModule } from '@angular/material/dialog';
import { CarelloComponent } from './carello/carello.component'
import { MatTableModule } from "@angular/material/table"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltriComponent } from './filtri/filtri.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select';
import { PaginaProdottoComponent } from './pagina-prodotto/pagina-prodotto.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CarPreButtonComponent } from './car-pre-button/car-pre-button.component'

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
    CarPreButtonComponent
  ],
  imports: [
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
