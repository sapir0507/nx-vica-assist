import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { DropdownSidebarComponent } from './dropdown-sidebar/dropdown-sidebar.component';
import { DropdownComponent } from './dropdown-sidebar/dropdown/dropdown.component';
import { LinksComponent } from './links/links.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    DropdownSidebarComponent,
    DropdownComponent,
    LinksComponent,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
