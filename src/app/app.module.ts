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

@NgModule({
  declarations: [
    AppComponent,
    MainPartComponent,
    AsidePartComponent,
    HeaderPartComponent
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
