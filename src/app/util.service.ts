import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UtilService {
  code!:number;
  constructor(private http : HttpClient) { }
  
  getData(url : string){
    return this.http.get(url);
  }
  gData(c:number){
      this.code = c;
  }
  sData(){
    return this.code
  }
}
