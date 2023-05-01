import { createReducer, on } from '@ngrx/store';
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
