import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  animations: [
    trigger("myAnimationTrigger", [
      state('shown', style({
        transform: 'translateY(100%)', opacity: 0
      })
      ), state('hidden', style({
        transform: 'translateY(0%)'
      })
      ), transition('shown => hidden', [
        animate('2s')
      ]),
    ])
  ]
})
export class DetailComponent implements OnInit {
  state?: string;
  constructor() { }

  ngOnInit(): void {
    this.state = 'shown';
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.state = 'hidden';
    }, 300);
  }

}
