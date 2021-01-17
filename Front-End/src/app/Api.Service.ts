import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;
  constructor(apiService: ApiService) {
    apiService.getUsers().subscribe((data) => {
      console.log(data);
    })
  }

}

