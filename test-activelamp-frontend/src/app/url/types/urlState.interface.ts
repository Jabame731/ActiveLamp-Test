import { UrlInterface } from './url.interface';

export interface UrlStateInterface {
  isLoading: boolean;
  urls: UrlInterface[];
  selectedUrl: string;
  isError: string | null;
}
