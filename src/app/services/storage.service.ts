import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class storageService {

  constructor() { }

  public saveToken(token: string){
    sessionStorage.setItem('token', token);
  }

  public getToken(){
    return sessionStorage.getItem('token');
  }

  public saveUser(user: any){
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  public getUser(){
    const user = sessionStorage.getItem('user');
    if(user){
      return JSON.parse(user);
    }
    return {};

    // return JSON.parse(user || ''); // Autre façon de le faire moins verbose

  }
}
