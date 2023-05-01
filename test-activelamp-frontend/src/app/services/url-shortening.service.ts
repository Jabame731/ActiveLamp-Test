import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UrlShortenerService {
  private readonly apiUrl = 'http://localhost:8800';

  constructor(private readonly http: HttpClient) {}

  shortenUrl(originalUrl: string) {
    return this.http.post(`${this.apiUrl}/api/short/`, { url: originalUrl });
  }

  getOriginalUrl(shortCode: string) {
    return this.http.get(`${this.apiUrl}/api/short/shorten.com/${shortCode}`);
  }
}
