import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isOpen = true;

  discordEmbedURL = this.sanitizer.bypassSecurityTrustResourceUrl('https://ptb.discordapp.com/widget?id=446748544007798794&theme=dark');

  constructor(private sanitizer: DomSanitizer) {
  }
  ngOnInit() {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
