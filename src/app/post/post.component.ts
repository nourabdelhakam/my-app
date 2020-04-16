import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input()

  post = {};

  constructor(private config: ConfigService) { }

  ngOnInit() {
  }

}
