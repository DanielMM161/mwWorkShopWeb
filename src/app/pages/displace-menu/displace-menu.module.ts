import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DisplaceMenuPage } from './displace-menu.page';

const routes: Routes = [
  {
    path: 'displace-menu',
    component: DisplaceMenuPage,
    children: [
      {
        path: 'menu',
        loadChildren: '../menu/menu.module#MenuPageModule'
      },
      {
        path: 'create-user',
        loadChildren: '../create-user/create-user.module#CreateUserPageModule'
      },
      {
        path: 'list-user',
        loadChildren: '../list-user/list-user.module#ListUserPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DisplaceMenuPage]
})
export class DisplaceMenuPageModule {}
