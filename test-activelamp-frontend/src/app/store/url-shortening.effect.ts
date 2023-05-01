import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UrlShortenerService } from '../services/url-shortening.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  shortenUrl,
  shortenUrlFailure,
  shortenUrlSuccess,
  getOriginalUrl,
  getOriginalUrlFailure,
  getOriginalUrlSuccess,
} from './url-shortening.action';

@Injectable()
export class UrlShortenerEffects {
  constructor(
    private actions$: Actions,
    private urlShortenerService: UrlShortenerService
  ) {}

  shortenUrl$ = createEffect(() =>
    this.actions$.pipe(
      ofType(shortenUrl),
      mergeMap((action) =>
        this.urlShortenerService.shortenUrl(action.originalUrl).pipe(
          map((shortUrl: any) => shortenUrlSuccess({ shortUrl })),
          catchError((isError) => of(shortenUrlFailure({ isError })))
        )
      )
    )
  );

  getOriginalUrl$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getOriginalUrl),
      mergeMap((action) =>
        this.urlShortenerService.getOriginalUrl(action.shortCode).pipe(
          map((originalUrl: any) =>
            getOriginalUrlSuccess({ originalUrl: originalUrl })
          ),
          catchError((isError) => of(getOriginalUrlFailure({ isError })))
        )
      )
    )
  );
}
