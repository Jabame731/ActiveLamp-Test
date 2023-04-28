import { createReducer, on } from '@ngrx/store';
import { longUrl } from '../types/url.interface';
import * as UrlActions from './action';
import { UrlStateInterface } from '../types/urlState.interface';

const initialState: UrlStateInterface = {
  urls: [],
  selectedUrl: '',
  isLoading: false,
  isError: null,
};

export const urlReducer = createReducer(
  initialState,
  on(UrlActions.addUrl, (state, { longUrl }) => ({
    ...state,
    urls: [...state.urls],
    isError: null,
    isLoading: false,
  })),
  on(UrlActions.getLongUrl, (state, { shortUrl }) => ({
    ...state,
    selectedUrl: shortUrl,
    isError: null,
    isLoading: false,
  }))
);
