import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public name: string = null;
  public avatarSmall: string = null;
  public avatarMedium: string = null;
  public avatarLarge: string = null;
  public profileUrl: string  = null;

  constructor(private backendService: BackendService) { }

  fetchData() {
    this.backendService.get('/account').subscribe(res => {
      // console.log(res);
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
      this.name = null;
      this.avatarSmall = null;
      this.avatarMedium = null;
      this.avatarLarge = null;
      this.profileUrl = null;
      // console.log(res);
    });
  }
}
