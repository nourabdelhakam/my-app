import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  post = {};

  constructor(private config: ConfigService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.post = this.getPostById(id);
  }

  getPostById(id: number) {
    return this.config.getPostByID(id);
  }

  getBack() {
    this.location.back();
  }

}
