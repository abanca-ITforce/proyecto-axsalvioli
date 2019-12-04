import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private endPointFlag ="https://restcountries.eu/data/"
  private endPointCountry = "https://api.worldbank.org/v2/country";
  private endPointRegion = "https://api.worldbank.org/v2/region"
  private urlRegion = "https://api.worldbank.org/v2/region/?format=json"
  private format = "?per_page=1000&format=json";
  private endPointCountriesByregioCode = 'https://api.worldbank.org/v2/country?region=';
  private formatCountriesByRegionCode = '&per_page=1000&format=json';



  constructor(private httpClient: HttpClient) {}

  getAllCountries$() {
    const url = this.endPointCountry + this.format;
    return this.httpClient.get<any[]>(url).pipe(map(result => result[1]));
  }

  getCountryById$(countryId) {
    const url = this.endPointCountry + "/" + countryId + this.format;
    return this.httpClient.get<any>(url).pipe(map(result => result[1][0]));
  }

  getAllRegions$() {
    const url = this.urlRegion;
    return this.httpClient.get<any[]>(url).pipe(map(result => result[1]));
  }

  getRegionByCode$(regionCode) {
    const url = this.endPointRegion + "/" + regionCode + this.format;
    return this.httpClient.get<any>(url).pipe(map(result => result[1][0]));
  }
  getCountriesByRegionCode$(regionCode) {
    const url = this.endPointCountriesByregioCode + regionCode + this.formatCountriesByRegionCode;
    return this.httpClient.get<any>(url).pipe(map(result => result[1]));
  }
  getFlagByCountryId(countryId) {
    const url: string = this.endPointFlag + countryId.toLowerCase() + '.svg';
    return url;
  }
}




