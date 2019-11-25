import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @Input()
  hasSidebar: boolean = false;
  @Input()
  hasToggleSidebar: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
