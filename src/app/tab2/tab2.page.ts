import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;

  constructor() {
    this.lottieConfig = {
      path: 'https://assets6.lottiefiles.com/packages/lf20_9eLZ98.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
  }

  handleAnimation(anim: any) {
    this.anim = anim;
  }

  stop() {
    this.anim.stop();
  }

  play() {
    this.anim.play();
  }

  pause() {
    this.anim.pause();
  }

  setSpeed(speed: number) {
    this.animationSpeed = speed;
    this.anim.setSpeed(speed);
  }
}
