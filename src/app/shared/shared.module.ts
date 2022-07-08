import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormHeaderComponent } from './components/form-header/form-header.component';
import { AlertBoxComponent } from './components/alert-box/alert-box.component';
import { SuccessBoxComponent } from './components/success-box/success-box.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    FormHeaderComponent,
    AlertBoxComponent,
    SuccessBoxComponent,
    LoaderComponent,
  ],
  imports: [CommonModule],
  exports: [
    AlertBoxComponent,
    FormHeaderComponent,
    SuccessBoxComponent,
    LoaderComponent,
  ],
})
export class SharedModule {}
