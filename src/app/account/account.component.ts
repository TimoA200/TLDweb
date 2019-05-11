import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  token: string = null;

  name: string = null;
  avatarSmall: string = null;
  avatarMedium: string = null;
  avatarLarge: string = null;
  profileUrl: string = null;

  constructor(public backendService: BackendService,
              public activatedRoute: ActivatedRoute,
              public router: Router,
              public cookieService: CookieService) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    console.log(this.token);
    this.backendService.get('/account').subscribe(res => {
      console.log(res);
      // @ts-ignore
      this.name = res.displayName;
      // @ts-ignore
      this.avatarSmall = res.photos[0].value;
      // @ts-ignore
      this.avatarMedium = res.photos[1].value;
      // @ts-ignore
      this.avatarLarge = res.photos[2].value;
      // @ts-ignore
      this.profileUrl = res._json.profileurl;
    });
  }

  logout() {
    this.backendService.get('/logout').subscribe(res => {
      console.log(res);
      this.router.navigate(['/home']);
    });
  }
}
