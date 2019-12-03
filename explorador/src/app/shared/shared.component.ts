import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExploradorService } from 'src/app/explorador.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {
  public country: string;
  dataCountry$: Observable<any[]>;
  constructor(activatedRoute: ActivatedRoute, private exploradorService: ExploradorService) {
  this.country = activatedRoute.snapshot.params.countryId;
  console.log(this.country);
  this.dataCountry$ = this.exploradorService.getCountryById$(this.country);
  }

  ngOnInit() {
  }

}
