import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/displace-menu/displace-menu.module#DisplaceMenuPageModule' },
  { path: 'send-budget', loadChildren: './pages/send-budget/send-budget.module#SendBudgetPageModule' }



  /*{ path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'create-user', loadChildren: './pages/create-user/create-user.module#CreateUserPageModule' },
  { path: 'list-user', loadChildren: './pages/list-user/list-user.module#ListUserPageModule' },
  { path: 'displace-menu', loadChildren: './pages/displace-menu.module#DisplaceMenuPageModule' },
  { path: 'displace-menu', loadChildren: './pages/displace-menu/displace-menu.module#DisplaceMenuPageModule' },*/

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
