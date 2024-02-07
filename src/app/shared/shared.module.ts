import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormHeaderComponent } from './components/form-header/form-header.component';
import { AlertBoxComponent } from './components/alert-box/alert-box.component';
import { SuccessBoxComponent } from './components/success-box/success-box.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {
  menuAlt2,
  search,
  bell,
  home,
  bookmark,
  currencyDollar,
  database,
  x,
  informationCircle,
  HeroIconModule,
} from 'ng-heroicon';
import { MatMenuModule } from '@angular/material/menu';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ErrorBoxComponent } from './components/error-box/error-box.component';
import { EmptyPageComponent } from './components/empty-page/empty-page.component';
import { PostComponent } from './components/post/post.component';
import { ModalComponent } from './components/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FormHeaderComponent,
    AlertBoxComponent,
    SuccessBoxComponent,
    LoaderComponent,
    NavbarComponent,
    SidebarComponent,
    ErrorBoxComponent,
    EmptyPageComponent,
    PostComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    HeroIconModule.withIcons(
      {
        menuAlt2,
        search,
        bell,
        home,
        database,
        bookmark,
        currencyDollar,
        x,
        informationCircle,
      },
      {
        /**
         * Child level options.
         * Non passed options will use the rootModule options.
         */
        defaultHostDisplay: 'block',
      }
    ),
    MatMenuModule,
    MatSidenavModule,
    MatDialogModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    AlertBoxComponent,
    FormHeaderComponent,
    SuccessBoxComponent,
    LoaderComponent,
    NavbarComponent,
    SidebarComponent,
    ErrorBoxComponent,
    EmptyPageComponent,
    PostComponent,
    ModalComponent,
  ],
})
export class SharedModule {}
