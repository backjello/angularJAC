import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// animazioni angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from "@angular/material/table"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select';
import { NgImageSliderModule } from 'ng-image-slider';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { LoginComponent } from './pages/login/login.component';
import { ProdottoComponent } from './componentes/prodotto/prodotto.component';
import { CarelloComponent } from './componentes/carello/carello.component';
import { FiltriComponent } from './componentes/filtri/filtri.component';
import { PaginaProdottoComponent } from './pages/pagina-prodotto/pagina-prodotto.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './componentes/header/header.component';
import { CarPreButtonComponent } from './componentes/car-pre-button/car-pre-button.component';
import { CategoriaComponent } from './componentes/categoria/categoria.component';
import { RecensioneComponent } from './componentes/recensione/recensione.component';
import { ErrorInterceptor } from './generic/error.interceptor';
import { TokenInterceptor } from './generic/token.interceptor';
import { FormprodottoComponent } from './pages/formprodotto/formprodotto.component';
import { PaginaCategorieComponent } from './pages/pagina-categorie/pagina-categorie.component';
import { RegistrazioneComponent } from './pages/registrazione/registrazione.component';
import { ChatpageComponent } from './pages/chatpage/chatpage.component';
import { MessageComponent } from './componentes/message/message.component';
import { ChatComponent } from './componentes/chat/chat.component';
import { UtenteheaderComponent } from './componentes/utenteheader/utenteheader.component';
import { MatMenuModule} from '@angular/material/menu'
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { PaginaOrdiniComponent } from './pages/pagina-ordini/pagina-ordini.component';
import { DateOrStringPipe } from './pipes/date-or-string.pipe';
import { ChangeCasePipe } from './pipes/change-case.pipe';
import { ReduceTextPipe } from './pipes/reduce-text.pipe';
import { EvidenziaDirective } from './directives/evidenzia.directive';

//                                              ip:port
const config: SocketIoConfig = { url: "http://3.67.5.131:3333/",};

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
    LoginComponent,
    ChatpageComponent,
    ChatComponent,
    MessageComponent,
    UtenteheaderComponent,
    PaginaOrdiniComponent,
    DateOrStringPipe,
    ChangeCasePipe,
    ReduceTextPipe,
    EvidenziaDirective
  ],
  imports: [
    MatMenuModule,
    SocketIoModule.forRoot(config),
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
