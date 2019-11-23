import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { DashboardMenu } from './dashboard-menu';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  menu: NbMenuItem[];
  alive: boolean = true;

  constructor(private dashboardMenu: DashboardMenu){
    this.initMenu();
  }

  ngOnInit() {
  }

  initMenu() {
    this.dashboardMenu.getMenu()
      .pipe(takeWhile(() => this.alive))
      .subscribe(menu => {
        this.menu = menu;
      });
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
