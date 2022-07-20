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
    return this.http.get('https://api.airtable.com/v0/app5834XqtTqJdrhU/Projects?maxRecords=3&view=Grid%20view', header);
  }

  
}
