import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {MatToolbarModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './components/about/about.component'

import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './components/header/header.component';
import { from } from 'rxjs';

 const routes = [
   { path: 'about', component: AboutComponent },
   { path: 'Products', component: ProductsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
