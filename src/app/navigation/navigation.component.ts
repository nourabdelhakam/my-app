import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthenticationService } from '../authentication.service';
import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private location: Location, private auth: AuthenticationService) { }

  ngOnInit() {

    // tslint:disable-next-line: only-arrow-functions
    $(document).ready( function() {
      /*Responsive Navigation*/
      $('#nav-mobile').html($('#nav-main').html());
      $('#nav-trigger span').on('click', function() {
        if ($('nav#nav-mobile ul').hasClass('expanded')) {
          $('nav#nav-mobile ul.expanded').removeClass('expanded').slideUp(250);
          $(this).removeClass('open');
        } else {
          $('nav#nav-mobile ul').addClass('expanded').slideDown(250);
          $(this).addClass(open);
        }
      });

      $('#nav-mobile').html($('#nav-main').html());
      // tslint:disable-next-line: only-arrow-functions
      $('#nav-mobile ul a').on('click', function() {
       if ($('nav#nav-mobile ul').hasClass('expanded')) {
         $('nav#nav-mobile ul.expanded').removeClass('expanded').slideUp(250);
         $('#nav-trigger span').removeClass('open');
        }
      });
    });
  }

  logout() {
    this.auth.logout();
  }

}
