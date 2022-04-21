/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @angular-eslint/component-selector */
import { Component, Input } from '@angular/core';
import { LinksService } from '@proj/ui';
import { Links } from 'libs/ui/src/lib/links.interface';

@Component({
  selector: 'app-dropdown-sidebar',
  templateUrl: './dropdown-sidebar.component.html',
  styleUrls: ['./dropdown-sidebar.component.scss'],
})
export class DropdownSidebarComponent {
  @Input() currentLinks?: Array<Links> ;
  @Input() customersLinks?: Array<Links> ;
  @Input() agentsLinks?: Array<Links> ;
  @Input() sharedLinks?: Array<Links>;
  
  constructor(private SLinks: LinksService) {
    this.sharedLinks = SLinks.getLinks('shared');
    this.customersLinks = SLinks.getLinks('customer');
    this.agentsLinks = SLinks.getLinks('agent');
  }

}
