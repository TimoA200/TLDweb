import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Config } from './config';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private backendURL = (Config.debug ? 'http://192.168.178.43' : 'https://tld.hopto.org') + ':3000';

  constructor(private http: HttpClient) {
  }

  get(url: string) { // Example: /account
    const httpOptions = {
      withCredentials: true,
    };
    return this.http.get(this.backendURL + url, httpOptions
    ).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
