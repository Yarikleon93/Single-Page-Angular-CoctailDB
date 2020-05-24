import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterListComponent } from './components/filter-list/filter-list.component';
import { HeaderComponent } from './components/header/header.component';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';
import { CoctailItemComponent } from './components/coctail-item/coctail-item.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FilterListComponent,
    HeaderComponent,
    CocktailListComponent,
    CoctailItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
