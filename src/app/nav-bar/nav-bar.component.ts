import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public accountService: AccountService,
              private backendService: BackendService) { }

  ngOnInit() {
    this.accountService.fetchData();
  }

  signin() {
    window.location.href = this.backendService.backendURL + '/auth/steam';
  }
}
