import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpclientModule {

  constructor(private http: HttpClient) { }

  getUsers = () => {
    return this.http.get{
      'https://https://strong-ossified-pig.glitch.me');
    }

  }
}


