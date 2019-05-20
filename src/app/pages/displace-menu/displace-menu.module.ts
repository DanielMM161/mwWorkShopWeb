import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DisplaceMenuPage } from './displace-menu.page';
import { MenuPageModule } from '../menu/menu.module';
import { CreateUserPageModule } from '../create-user/create-user.module';
import { ListUserPageModule } from '../list-user/list-user.module';
import { DisplaceMenuRoutingModule } from './displace-menu-routing.module';

const routes: Routes = [
  {
    path: '',
    component: DisplaceMenuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplaceMenuRoutingModule,
    MenuPageModule,
    CreateUserPageModule,
    ListUserPageModule
  ],
  declarations: [DisplaceMenuPage]
})
export class DisplaceMenuPageModule {}
