import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExploradorService } from 'src/app/explorador.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  countrysList$: Observable<any[]>;
  constructor(
    activatedRoute: ActivatedRoute,
    private exploradorService: ExploradorService
  ) {

    this.countrysList$ = exploradorService.getCountrys$();
  }
  ngOnInit() {
  }

}
