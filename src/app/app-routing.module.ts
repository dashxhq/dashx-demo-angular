import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './modules/home/pages/contact/contact.component';
import { ForgotPasswordComponent } from './modules/home/pages/forgot-password/forgot-password.component';
import { LoginComponent } from './modules/home/pages/login/login.component';
import { RegisterComponent } from './modules/home/pages/register/register.component';
import { ResetPasswordComponent } from './modules/home/pages/reset-password/reset-password.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
