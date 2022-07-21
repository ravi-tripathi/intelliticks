import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  constructor(private http: HttpClient) { }

  getAllProperties(){
    var header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer keynhzhMfx3VgbfYS`)
    };
    return this.http.get('https://api.airtable.com/v0/app5834XqtTqJdrhU/Projects', header);
  }

  addNewPropertytoList(data: any){
    var header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer keynhzhMfx3VgbfYS`)
        .set('Content-Type','application/json')
    };
    return this.http.post('https://api.airtable.com/v0/app5834XqtTqJdrhU/Projects',data, header);
  }

  deleteProperty(id:any) {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer keynhzhMfx3VgbfYS`)
    };
    return this.http.delete('https://api.airtable.com/v0/app5834XqtTqJdrhU/Projects/'+id , header);
  }

  
}
