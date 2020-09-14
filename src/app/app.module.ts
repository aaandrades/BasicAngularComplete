import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { APP_ROUTING } from "./app.routes";

//Servicios
import { HeroesService } from './components/services/heroes.service';

//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { AboutComponent } from './components/about/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeroesComponent,
    AboutComponent,
    HeroeComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
