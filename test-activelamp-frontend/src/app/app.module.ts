import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { UrlShorteningComponent } from './url-shortening/url-shortening.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { UrlShortenerEffects } from './store/url-shortening.effect';
import { urlShortenerReducer } from './store/url-shortening.reducer';

@NgModule({
  declarations: [AppComponent, UrlShorteningComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({ urlShortenerReducer }),
    EffectsModule.forRoot([UrlShortenerEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
