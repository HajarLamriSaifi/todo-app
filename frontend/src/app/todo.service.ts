import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import HttpClient
import { Observable, of } from 'rxjs';  // Import Observable and 'of' for fallback data
import { catchError } from 'rxjs/operators';  // Import catchError for error handling

@Injectable({
  providedIn: 'root'  // The service is provided globally
})
export class TodoService {
  private apiUrl = 'http://localhost:5250/api/test';  // Your backend API URL

  constructor(private http: HttpClient) { }  // Inject HttpClient here

  // Method to fetch data from the backend API with error handling
  getTodoMessage(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error occurred:', error);  // Log the error to the console
        return of({ message: 'Failed to load data' });  // Return a fallback object on error
      })
    );
  }
}
