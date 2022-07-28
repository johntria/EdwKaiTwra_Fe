import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  { path: 'home', loadChildren: () => import('./pages/home-page/home.module').then(m => m.HomeModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },




  //   🆘🆘 SOS!!! 🆘🆘
  // We have to add this route to the end of the routes array due to if any other route is not found, we redirect to the home page
  { path: '**', redirectTo: '/home' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
