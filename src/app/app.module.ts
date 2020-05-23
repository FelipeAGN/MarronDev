import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductosComponent } from './productos/productos.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes} from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { GoogleMapComponent } from './google-map/google-map.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { MejoresProdMarronComponent } from './mejores-prod-marron/mejores-prod-marron.component';
import { TipoChocolateComponent } from './tipo-chocolate/tipo-chocolate.component';
import { MediaBarComponent } from './media-bar/media-bar.component';

const routes: Routes = [

  {path: '', redirectTo:'/inicio',pathMatch:'full'},
  {path: 'inicio', component: InicioComponent},
  //{path: 'productos', component: ProductosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'productos', component:MejoresProdMarronComponent},
  {path: 'tipochocolate', component:TipoChocolateComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    ProductosComponent,
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    GoogleMapComponent,
    MejoresProdMarronComponent,
    MediaBarComponent,
    TipoChocolateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyD1cUN53wZpUH7Q3oqzBq5n2JmrZ619B6k',
      libraries:['places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

    constructor(library: FaIconLibrary){
      library.addIconPacks(fas, fab);
    }

 }
