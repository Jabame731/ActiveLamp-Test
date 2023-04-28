import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UrlShorteningService } from '../services/url.service';
import { addUrl, getLongUrl, urlFailure, getUrlSuccess } from './action';
import { switchMap, map, catchError, of } from 'rxjs';

@Injectable()
export class UrlShorteningEffects {
  constructor(
    private actions$: Actions,
    private urlService: UrlShorteningService
  ) {}

  getLongUrlByShortUrlCode$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getLongUrl),
      switchMap(({ shortUrl }) =>
        this.urlService.getLongUrlfromShortUrl(shortUrl).pipe(
          map((url) => getUrlSuccess({ url })),
          catchError((error) => of(urlFailure({ error })))
        )
      )
    )
  );

  addUrlShortener = createEffect(() =>
    this.actions$.pipe(
      ofType(addUrl),
      switchMap(({ longUrl }) =>
        this.urlService.addUrlShortenerfromLongUrl(longUrl).pipe(
          map((url) => getUrlSuccess({ url })),
          catchError((error) => of(urlFailure({ error })))
        )
      )
    )
  );
}
