// import { createReducer, on } from '@ngrx/store';
// import {
//   generateShortUrlSuccess,
//   inflateUrlSuccess,
// } from './ur-shortening.action';
// import { UrlShortener } from '../models/url-shortening.model';

// export interface UrlShortenerState {
//   shortUrl: string;
//   longUrl: string;
// }

// export const initialState: UrlShortenerState = {
//   shortUrl: '',
//   longUrl: '',
// };

// export const urlShortenerReducer = createReducer(
//   initialState,
//   on(generateShortUrlSuccess, (state, { shortUrl }) => ({
//     ...state,
//     shortUrl,
//   })),
//   on(inflateUrlSuccess, (state, { longUrl }) => ({ ...state, longUrl }))
// );

import { Action, createReducer, on } from '@ngrx/store';
import {
  shortenUrlSuccess,
  shortenUrlFailure,
  getOriginalUrlSuccess,
  getOriginalUrlFailure,
} from './url-shortening.action';

export interface UrlShortenerState {
  shortUrl: string;
  originalUrl: string;
  isError: null;
}

export const initialState: UrlShortenerState = {
  shortUrl: '',
  originalUrl: '',
  isError: null,
};

export const urlShortenerReducer = createReducer(
  initialState,
  on(shortenUrlSuccess, (state, { shortUrl }) => ({
    ...state,
    shortUrl,
    error: null,
  })),
  on(shortenUrlFailure, (state, { isError }) => ({
    ...state,
    shortUrl: '',
    isError,
  })),
  on(getOriginalUrlSuccess, (state, { originalUrl }) => ({
    ...state,
    originalUrl,
    error: null,
  })),
  on(getOriginalUrlFailure, (state, { isError }) => ({
    ...state,
    originalUrl: '',
    isError,
  }))
);
