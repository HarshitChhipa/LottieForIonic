import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public lottieConfig: Object;
  
  constructor() {
    this.lottieConfig = {
      path: 'https://assets9.lottiefiles.com/packages/lf20_lVYMUQ.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
  }
}
