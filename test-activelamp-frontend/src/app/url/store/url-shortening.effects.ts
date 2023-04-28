import { createReducer, on } from '@ngrx/store';
import { Url } from '../types/url-shortening.interface';
import * as UrlShorteningActions from './url-shortening.actions';

export interface UrlShorteningState {
  url: Url | null;
  isloading: boolean;
  isError: any;
}

export const initialState: UrlShorteningState = {
  url: null,
  isloading: false,
  isError: null,
};

export const urlShorteningReducer = createReducer(
  initialState,
  on(UrlShorteningActions.createShortUrl, (state) => ({
    ...state,
    isloading: true,
  })),
  on(UrlShorteningActions.createShortUrlSuccess, (state, { url }) => ({
    ...state,
    url,
    isLoading: false,
    isError: null,
  })),
  on(UrlShorteningActions.createShortUrlFailure, (state, { error }) => ({
    ...state,
    isloading: false,
    isError: error,
  })),
  on(UrlShorteningActions.getOriginalUrl, (state) => ({
    ...state,
    isloading: true,
  })),
  on(UrlShorteningActions.getOriginalUrlSuccess, (state, { url }) => ({
    ...state,
    url,
    isloading: false,
    isError: null,
  })),
  on(UrlShorteningActions.getOriginalUrlFailure, (state, { error }) => ({
    ...state,
    isloading: false,
    isError: error,
  }))
);
