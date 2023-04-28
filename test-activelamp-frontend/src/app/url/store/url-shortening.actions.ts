import { createAction, props } from '@ngrx/store';
import { Url } from '../types/url-shortening.interface';

export const createShortUrl = createAction(
  '[Url Shortening] Create ShortUrl',
  props<{ url: string }>()
);
export const createShortUrlSuccess = createAction(
  '[Url Shortening] Create ShortUrl Success',
  props<{ url: Url }>()
);
export const createShortUrlFailure = createAction(
  '[Url Shortening] Create ShortUrl Failure',
  props<{ error: string }>()
);

export const getOriginalUrl = createAction(
  '[Url Shortening] Get Original Url',
  props<{ shortUrl: string }>()
);
export const getOriginalUrlSuccess = createAction(
  '[Url Shortening] Get Original Url Success',
  props<{ url: Url }>()
);
export const getOriginalUrlFailure = createAction(
  '[Url Shortening] Get Original Url Failure',
  props<{ error: string }>()
);
