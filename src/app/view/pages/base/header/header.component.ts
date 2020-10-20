import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()
  clickMenu = new EventEmitter<void>();

  @Output()
  clickBottomSheet = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
