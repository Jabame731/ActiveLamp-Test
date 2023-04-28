import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { urls } from 'src/assets/utils';

interface ShortenResponse {
  urlShortened: string;
}

interface OriginalUrlResponse {
  OriginalUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class UrlShorteningService {
  private baseUrlBackend = urls.backend_url;

  constructor(private http: HttpClient) {}

  createShortUrl(urlOriginal: string): Observable<string> {
    const url = `${this.baseUrlBackend}/api/short/`;

    return this.http
      .post<ShortenResponse>(url, { urlOriginal })
      .pipe(map((response: ShortenResponse) => response.urlShortened));
  }

  getOriginalUrl(shortenedUrl: string): Observable<string> {
    const url = `${this.baseUrlBackend}/api/short/shorten.com/${shortenedUrl}`;

    return this.http
      .post<OriginalUrlResponse>(url, { shortenedUrl })
      .pipe(map((response: OriginalUrlResponse) => response.OriginalUrl));
  }
}
