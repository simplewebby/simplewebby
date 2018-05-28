import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('myAnim', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(2)',
      })),
      transition('small <=> large', animate('600ms ease-in')),
    ]),


    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('200ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(-35%)', offset: .2 }),
            style({ opacity: 1, transform: 'translateY(0%)', offset: 1 }),
          ]))]), { optional: true }),

        query(':leave', stagger('200ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(-35%)', offset: .2 }),
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 1 }),
          ])),
        ]), { optional: true })
      ]),
    ]),
  ]})

export class HomeComponent implements OnInit {
  items = [];
  state: String = 'small';
  constructor() {
    this.items = ['I am a frontend web developer', 'Languages I know: ',
      'JavaScript', 'MySQL', 'HTML', 'Java', 'CSS', 'PHP', 'frameworks and libraries such as ', 'AJAX & JSON', 'Angular'];
  }


  ngOnInit() {
  }
  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

}
