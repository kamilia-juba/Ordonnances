import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { FormsModule } from '@angular/forms';

//c'est un décorateur avec plusieurs attributs
@NgModule({  
  //déclaration de tous les composants qu'on va utiliser dans l'application
  declarations: [
    
    AppComponent,
    ProduitsComponent,
    AddProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  //déclaration des services
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
