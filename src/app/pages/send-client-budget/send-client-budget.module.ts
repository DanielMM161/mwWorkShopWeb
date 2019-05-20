import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SendClientBudgetPage } from './send-client-budget.page';

const routes: Routes = [
  {
    path: '',
    component: SendClientBudgetPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SendClientBudgetPage]
})
export class SendClientBudgetPageModule {}
