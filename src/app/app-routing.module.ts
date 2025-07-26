import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'abc',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./landing-page/landing-page.module').then( m => m.LandingPagePageModule)
  },
  {
    path: 'login-page',
    loadChildren: () => import('./login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'sign-page',
    loadChildren: () => import('./sign-page/sign-page.module').then( m => m.SignPagePageModule)
  },
  {
    path: 'menu-page',
    loadChildren: () => import('./menu-page/menu-page.module').then( m => m.MenuPagePageModule)
  },
  {
    path: 'dish-page',
    loadChildren: () => import('./dish-page/dish-page.module').then( m => m.DishPagePageModule)
  },
  {
    path: 'checkout-page',
    loadChildren: () => import('./checkout-page/checkout-page.module').then( m => m.CheckoutPagePageModule)
  },
  {
    path: 'view',
    loadChildren: () => import('./view/view.module').then( m => m.ViewPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
