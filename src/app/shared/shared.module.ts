import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormHeaderComponent } from './components/form-header/form-header.component';
import { AlertBoxComponent } from './components/alert-box/alert-box.component';
import { SuccessBoxComponent } from './components/success-box/success-box.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { menuAlt2, search, bell, HeroIconModule } from 'ng-heroicon';
import { MatMenuModule } from '@angular/material/menu';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    FormHeaderComponent,
    AlertBoxComponent,
    SuccessBoxComponent,
    LoaderComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    HeroIconModule.withIcons(
      {
        menuAlt2,
        search,
        bell,
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
  ],
  exports: [
    AlertBoxComponent,
    FormHeaderComponent,
    SuccessBoxComponent,
    LoaderComponent,
    NavbarComponent,
    SidebarComponent,
  ],
})
export class SharedModule {}
