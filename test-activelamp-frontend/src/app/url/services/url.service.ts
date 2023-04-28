import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { longUrl, shortUrlCode, UrlInterface } from '../types/url.interface';
import { environment, urls } from 'src/assets/utils';

@Injectable({ providedIn: 'root' })
export class UrlShorteningService {
  constructor(private httpClient: HttpClient) {}

  addUrlShortenerfromLongUrl(url: longUrl): Observable<UrlInterface> {
    return this.httpClient.post<UrlInterface>(environment.backend_url, url);
  }

  getLongUrlfromShortUrl(shortUrlCode: shortUrlCode): Observable<UrlInterface> {
    return this.httpClient.get<UrlInterface>(
      `${environment.backend_url + urls.get_long_url + shortUrlCode}`
    );
  }
}
