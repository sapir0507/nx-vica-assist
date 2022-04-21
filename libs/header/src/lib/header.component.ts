/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/component-selector */
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { LinksService } from '@proj/ui';
import { Links } from 'libs/ui/src/lib/links.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit,OnDestroy {
  @Input() navbarComponentIs: number = window.innerWidth < 800? 1 : 2;
  resize?: Subscription;
  currentLinks?: Array<Links>;
  constructor(
    private SLinks: LinksService
    // ,private onResize: OnWindowResizeService
  ) {
    // this.resize = onResize.monitor_resizing(this.navbarComponentIs)
    // console.log(this.resize)
      this.currentLinks = SLinks.getLinks('shared');
      console.log('current Links: ',this.currentLinks)
    }

  ngOnInit(): void {
    this.navbarComponentIs = 1;
  }
  OnLogin(){
    //if agent
    this.currentLinks = this.SLinks.getLinks('agent').concat(this.SLinks.getLinks('customer'))
  }
  ngOnDestroy(): void {
    // this.resize.unsubscribe()
    console.log("on destory")
  }

}
