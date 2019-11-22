import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { AdminMenu } from './admin-menu';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
  menu: NbMenuItem[];
  alive: boolean = true;

  constructor(private adminMenu: AdminMenu){
    this.initMenu();
  }

  ngOnInit() {
  }

  initMenu() {
    this.adminMenu.getMenu()
      .pipe(takeWhile(() => this.alive))
      .subscribe(menu => {
        this.menu = menu;
      });
  }

  ngOnDestroy(): void {
    this.alive = false;
  }


}
