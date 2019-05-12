import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(public accountService: AccountService,
              private router: Router) { }

  ngOnInit() {
    this.accountService.fetchData();
  }

  logout() {
    this.accountService.logout();
    this.router.navigate(['/home']);
  }
}
