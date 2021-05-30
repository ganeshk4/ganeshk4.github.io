import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-btn',
  templateUrl: './custom-btn.component.html',
  styleUrls: ['./custom-btn.component.scss']
})
export class CustomBtnComponent implements OnInit {

  @Input() text:string;
  @Input() bgClass: string;
  @Input() colorClass: string = 'bg-blue-one';
  constructor() { }

  ngOnInit(): void {
  }

}
