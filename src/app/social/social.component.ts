import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

 socials = { };

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.socials = this.getSocial();
  }

  getSocial() {
    return this.config.getConfig().socials;
  }

}
