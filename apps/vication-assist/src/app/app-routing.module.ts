import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { 
  AuthGuardService as AuthGuard 
} from '@proj/login';


 const routes: Routes = [{
  path: 'homepage',
  loadChildren: () => import('./modules/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule)
  },
// {
//   path: 'add-hotel',
//   canActivate: [AuthGuard],
//   loadChildren: () => import('./modules/all_modules/add-new-hotel/add-new-hotel.module').then(m => m.AddNewHotelModule)
// },
// {
//   path: 'choose-hotel',
//   canActivate: [AuthGuard],
//   loadChildren: () => import('./modules/all_modules/choose-hotel/choose-hotel.module').then(m => m.ChooseHotelModule)
// },
// {
//   path: 'add-flight',
//   canActivate: [AuthGuard],
//   loadChildren: () => import('./modules/all_modules/add-new-flight/add-new-flight.module').then(m => m.AddNewFlightModule)
// },
// {
//   path: 'choose-flight',
//   canActivate: [AuthGuard],
//   loadChildren: () => import('./modules/all_modules/choose-flight/choose-flight.module').then(m => m.ChooseFlightModule)
// },
// {
//   path: 'preview',
//   canActivate: [AuthGuard],
//   loadChildren: () => import('./modules/all_modules/preview/preview.module').then(m => m.PreviewModule)
// },

// {
//   path: 'final-order',
//   canActivate: [AuthGuard],
//   loadChildren: () => import('./modules/all_modules/final-order/final-order.module').then(m => m.FinalOrderModule)
// },
{
  path: '',
  loadChildren: () => import('./modules/homepage/homepage.module').then(m => m.HomepageModule)
}]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }