import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HouseComponent } from './components/houses/house.component';
import { HogwartsComponent } from './components/hogwarts/hogwarts.component';
import { SchoolComponent } from  './pages/school/school.component';
import { PlatformComponent } from './components/platform/platform.component';
import { HomeComponent } from './pages/home/home.component';
import { CharacterComponent } from './pages/character/character.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharacterSearchComponent } from './components/character-search/character-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HouseComponent,
    HogwartsComponent,
    SchoolComponent,
    PlatformComponent,
    HomeComponent,
    CharacterComponent,
    CharacterCardComponent,
    CharacterSearchComponent,
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
