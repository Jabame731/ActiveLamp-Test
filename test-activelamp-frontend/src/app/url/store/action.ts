import { createAction, props } from '@ngrx/store';
import { UrlInterface, longUrl, shortUrlCode } from '../types/url.interface';

export const addUrl = createAction(
  '[LongUrl] converted ShortUrl ',
  props<{ longUrl: longUrl }>()
);

export const getUrlSuccess = createAction(
  '[Urls] Get Urls success',
  props<{ url: UrlInterface }>()
);

export const getLongUrl = createAction(
  '[shortUrl] converted LongUrl',
  props<{ shortUrl: shortUrlCode }>()
);

export const urlFailure = createAction(
  '[LongUrl] converted shortUrl failure',
  props<{ error: string }>()
);
