import { createAction, props } from '@ngrx/store';

export const shortenUrl = createAction(
  '[Url Shortener] Shorten URL',
  props<{ originalUrl: string }>()
);

export const shortenUrlSuccess = createAction(
  '[Url Shortener] Shorten URL Success',
  props<{ shortUrl: string }>()
);

export const shortenUrlFailure = createAction(
  '[Url Shortener] Shorten URL Failure',
  props<{ isError: any }>()
);

export const getOriginalUrl = createAction(
  '[Url Shortener] Get Original URL',
  props<{ shortCode: string }>()
);

export const getOriginalUrlSuccess = createAction(
  '[Url Shortener] Get Original URL Success',
  props<{ originalUrl: string }>()
);

export const getOriginalUrlFailure = createAction(
  '[Url Shortener] Get Original URL Failure',
  props<{ isError: any }>()
);
