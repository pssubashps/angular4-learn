import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() menuSelected = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onMenuSelect(menu:string) {
    this.menuSelected.emit(menu);
  }

}
