import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { shortenUrl, getOriginalUrl } from '../store/url-shortening.action';
import {
  UrlShortenerState,
  urlShortenerReducer,
} from '../store/url-shortening.reducer';

@Component({
  selector: 'app-url-shortening',
  templateUrl: './url-shortening.component.html',
  styleUrls: ['./url-shortening.component.scss'],
})
export class UrlShorteningComponent {
  originalUrl!: string;
  shortCode!: string;
  shortUrl$: Observable<string>;
  originalUrl$: Observable<string>;
  error$: Observable<any>;

  constructor(
    private store: Store<{ urlShortenerReducer: UrlShortenerState }>
  ) {
    this.shortUrl$ = this.store.pipe(
      select((state: any) => state.urlShortenerReducer.shortUrl.short_url)
    );
    this.originalUrl$ = this.store.pipe(
      select((state: any) => state.urlShortenerReducer.originalUrl.originalUrl)
    );
    this.error$ = this.store.pipe(
      select((state: any) => state.urlShortenerReducer.isError.error.message)
    );
  }

  onShortenUrl() {
    console.log(this.originalUrl);
    this.store.dispatch(shortenUrl({ originalUrl: this.originalUrl }));
  }

  onGetOriginalUrl() {
    this.store.dispatch(getOriginalUrl({ shortCode: this.shortCode }));
  }
}
