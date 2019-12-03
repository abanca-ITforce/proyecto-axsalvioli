import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExploradorService {
  private urlAllCountrys = 'https://api.worldbank.org/v2/country?per_page=1000&format=json';
  CountryList: any[];

  constructor(private http: HttpClient) {
    // this.http
    //   .get<any[]>(this.url)
    //   .subscribe(data => (this.taskList = data ? data : []));
    // const temp = localStorage.getItem('taskList');
    // if (temp) {
    //   this.taskList = JSON.parse(temp);
    // } else {
    //   this.taskList = [];
    // }
  }

  getCountrys$() {
    return this.http.get<any[]>(this.urlAllCountrys).pipe(map(data => (data[1])));
  }

  getCountryById$(id) {
    return this.http
      .get<any>('https://api.worldbank.org/v2/country/' + id + '?per_page=1&format=json')
      .pipe(map(data => (data[1])));
  }

  }
