import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/interfaces/Constants';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getConstantUser() {
    return this.http.get<Constants[]>('/assets/data/ConstantUser.json');
  }
}
