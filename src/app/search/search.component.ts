import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public backendService: BackendService) { }

  ngOnInit() {
  }

  test() {
    window.location.href = this.backendService.backendURL + '/auth/steam';
  }
}
