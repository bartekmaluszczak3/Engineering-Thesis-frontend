import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getHeaders } from 'src/app/shared/utils';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private baseUrl = "http://127.0.0.1:8080/city"

  constructor(private http: HttpClient) {}
  get(){
    let headers = getHeaders()
    return this.http.get<any>(this.baseUrl + "/get", {headers})
  }
}
