import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { NoAuthGuard } from './core/guard/no-auth.guard';
import { DashboardComponent } from './modules/home/layouts/dashboard/dashboard.component';
import { BillingComponent } from './modules/home/pages/billing/billing.component';
import { BookmarksComponent } from './modules/home/pages/bookmarks/bookmarks.component';
import { ContactComponent } from './modules/home/pages/contact/contact.component';
import { ForgotPasswordComponent } from './modules/home/pages/forgot-password/forgot-password.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { LoginComponent } from './modules/home/pages/login/login.component';
import { ProfileComponent } from './modules/home/pages/profile/profile.component';
import { RegisterComponent } from './modules/home/pages/register/register.component';
import { ResetPasswordComponent } from './modules/home/pages/reset-password/reset-password.component';
import { SettingsComponent } from './modules/home/pages/settings/settings.component';
import { StoreComponent } from './modules/home/pages/store/store.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [NoAuthGuard] },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [NoAuthGuard],
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    canActivate: [NoAuthGuard],
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
    canActivate: [NoAuthGuard],
  },
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'store',
        component: StoreComponent,
      },
      {
        path: 'bookmarks',
        component: BookmarksComponent,
      },
      {
        path: 'billing',
        component: BillingComponent,
      },
      {
        path: 'update-profile',
        component: ProfileComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
    ],
  },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
