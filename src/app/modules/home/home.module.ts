import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ContactComponent,
    ResetPasswordComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    CoreModule,
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ContactComponent,
    ResetPasswordComponent,
  ],
})
export class HomeModule {}
