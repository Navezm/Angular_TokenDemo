import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string){
    return this.http.post(environment.serverAddress + 'login', 
    {
      username,
      password
    });
  }

  signIn(username: string, password: string){
    return this.http.post(environment.serverAddress + 'register', 
    {
      username,
      password
    });
  }
}
