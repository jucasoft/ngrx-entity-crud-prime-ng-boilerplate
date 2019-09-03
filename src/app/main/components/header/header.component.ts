import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="p-grid p-justify-between">
      <div class="p-col">
        <div>
          <app-hamburger-button></app-hamburger-button>
        </div>
      </div>
      <div class="p-col text-align-right">
        <em class="fas fa-2x fa-user fa-button p-1" style="color: #FFF;"></em>
      </div>
    </div>
  `,
  styles: [`
    .fa-button:hover {
      opacity: 0.5;
      transition: transform 0.2s;
      /*transform: scale(1.1);*/
      cursor: pointer; cursor: hand;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
