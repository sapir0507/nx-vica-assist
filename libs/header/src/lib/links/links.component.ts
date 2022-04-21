/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @angular-eslint/component-selector */
import { Component, Input, OnInit } from '@angular/core';
import { LinksService } from '@proj/ui';
import { Links } from 'libs/ui/src/lib/links.interface';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
})
export class LinksComponent implements OnInit {
  @Input() currentLinks?: Array<Links> ;
  @Input() customersLinks?: Array<Links> ;
  @Input() agentsLinks?: Array<Links> ;
  @Input() sharedLinks?: Array<Links>;
  @Input() isDropDown?: boolean ;
  @Input() isSideBar?: boolean ;
  constructor(private SLinks: LinksService) {
    this.sharedLinks = SLinks.getLinks('shared');
    this.customersLinks = SLinks.getLinks('customer');
    this.agentsLinks = SLinks.getLinks('agent');
  }

  ngOnInit(): void {
    console.log("links component")
  }
}
