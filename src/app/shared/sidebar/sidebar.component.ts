import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../service/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})

export class SidebarComponent implements OnInit {

  constructor(public _Sidebar: SidebarService) { }

  ngOnInit(): void {
  }

}
