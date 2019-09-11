// UserService is created for calling the api method which will give us all users details list in response
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { Observable } from 'rxjs';

// we want to use a singleton instance of this service accross the application
// so we will mention this service in providers array of app module
@Injectable({
  providedIn: 'root'
})
export class UserService {
  // HttpClient service is used to make ajax request in angular
  constructor(private httpClient: HttpClient) {
  }

  // GetUsers method should be called when we are going to subscribe jsn in the component level
  // In angular, Observable is used for implementing the publish subscribe pattern
  GetUsers(): Observable<User[]> {
    // here User is a class containing the structure of data we are receiving
    // environment.apiAddress is the base address of API plus users is the service we are willing to call
    return this.httpClient.get<User[]>(environment.apiAddress + '/users');
  }

  GetUser(id: number): Observable<User> {
    return this.httpClient.get<User>(environment.apiAddress + '/users' + id);
  }

  AddUser(user: User): Observable<any> {
    return this.httpClient.post<any>(environment.apiAddress + '/users', JSON.stringify(user));
  }

  DeleteUser(id: number): Observable<any> {
    return this.httpClient.delete<any>(environment.apiAddress + '/users' + id);
  }
}
