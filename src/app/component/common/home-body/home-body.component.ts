import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'soxism-home-body',
  template: `
    <soxism-head></soxism-head>
    <div class="home-box">
        <div class="home-body">
            <router-outlet></router-outlet>
        </div>
    </div>
    <soxism-footer></soxism-footer>
  `,
  styles: [`
    .home-box {
      min-height: 650px;
    }
    .home-body {
      width: 1230px;
      margin: auto;
    }
  `]
})
export class HomeBodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
