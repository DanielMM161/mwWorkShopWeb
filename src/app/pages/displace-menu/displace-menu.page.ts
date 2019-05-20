import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-displace-menu',
  templateUrl: './displace-menu.page.html',
  styleUrls: ['./displace-menu.page.scss'],
})
export class DisplaceMenuPage implements OnInit {
  selectedPath = '';

  pages = [
    {
      title: 'Menu Page',
      url: '/displaceMenu/(displaceMenuContent:menu)'
    },
    {
      title: 'List-user Page',
      url: '/displaceMenu/(displaceMenuContent:listUser)'
    },
    {
      title: 'Create-user Page',
      url: '/displaceMenu/(displaceMenuContent:createUser)'
    }
  ];
  constructor(private routes: Router) {
    this.routes.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
   }

  ngOnInit() {
  }

}
