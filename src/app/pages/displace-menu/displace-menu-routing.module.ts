import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DisplaceMenuPage } from './displace-menu.page';
import { MenuPage } from '../menu/menu.page';
import { CreateUserPage } from '../create-user/create-user.page';
import { ListUserPage } from '../list-user/list-user.page';

const routes: Routes = [
  {
    path: 'displaceMenu',
    component: DisplaceMenuPage,
    children: [
      {
        path: 'menu',
        outlet: 'displaceMenuContent',
        component: MenuPage
      },
      {
        path: 'createUser',
        outlet: 'displaceMenuContent',
        component: CreateUserPage
      },
      {
        path: 'listUser',
        outlet: 'displaceMenuContent',
        component: ListUserPage
      },
    ]
  },
  {
    path: '',
    redirectTo: '/displaceMenu/(displaceMenuContent:menu)'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DisplaceMenuRoutingModule { }
