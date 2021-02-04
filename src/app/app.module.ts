import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { mainEffect, mainReducer } from './_store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { APP_BASE_HREF } from '@angular/common';
import { MainPartComponent } from './components/organisms/main-part/main-part.component';
import { AsidePartComponent } from './components/organisms/aside-part/aside-part.component';
import { HeaderPartComponent } from './components/organisms/header-part/header-part.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainTileComponent } from './components/atoms/main-tile/main-tile.component';


import { AboutMeComponent } from './components/molecules/about-me/about-me.component';
import { SkillsComponent } from './components/molecules/skills/skills.component';
import { SoftSkillsComponent } from './components/molecules/soft-skills/soft-skills.component';
import { LanguagesComponent } from './components/molecules/languages/languages.component';
import { HobbiesComponent } from './components/molecules/hobbies/hobbies.component';
import { TimelineComponent } from './components/molecules/timeline/timeline.component';
import { SummaryComponent } from './components/molecules/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPartComponent,
    AsidePartComponent,
    HeaderPartComponent,
    MainTileComponent,


    AboutMeComponent,
    SkillsComponent,
    SoftSkillsComponent,
    LanguagesComponent,
    HobbiesComponent,
    TimelineComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    StoreModule.forRoot(mainReducer),
    EffectsModule.forRoot(mainEffect),
    environment.production ? [] : StoreDevtoolsModule.instrument( ),
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
