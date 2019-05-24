import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-displace-menu',
  templateUrl: './displace-menu.page.html',
  styleUrls: ['./displace-menu.page.scss'],
})
export class DisplaceMenuPage implements OnInit {

  pages = [
    {
      title: 'Menu',
      url: '/displace-menu/menu'
    },
    {
      title: 'List User',
      url: '/displace-menu/list-user'
    },
    {
      title: 'Create User',
      url: '/displace-menu/create-user'
    }
  ];
  selectedPath = '';
  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
   }

  ngOnInit() {
  }

}
