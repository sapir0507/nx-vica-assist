/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/component-selector */
import { Component, Input, OnInit } from '@angular/core';
import { Links } from 'libs/ui/src/lib/links.interface';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Input() currentLinks?: Array<Links>;
  @Input() title?: string;
  @Input() isDropDown?: boolean ;
  @Input() isSideBar?: boolean ;
  constructor() {}

  ngOnInit(): void { console.log("dropdown component")}
}
