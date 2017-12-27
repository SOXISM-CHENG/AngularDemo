import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'soxism-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})

export class ImgComponent implements OnInit, AfterViewInit {
  @ViewChild('img') img: ElementRef;
  @Input() src?: string;
  @Input() type?: string = 'img'; // img, logo, banner 可不传，默认img
  imgUrl: any = {
    img: 'assets/images/default.png',
    logo: 'assets/images/default-logo.png',
    banner: 'assets/images/banner.jpg',
  }
  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let parentNode = this.img.nativeElement.parentNode;
    let imgNode = this.img.nativeElement;
    // tslint:disable-next-line:max-line-length
    imgNode.setAttribute('style', `${imgNode.getAttribute('style') || ''} ${parentNode.getAttribute('style') || ''}`);
    parentNode.setAttribute('style', '');
    // tslint:disable-next-line:max-line-length
    imgNode.setAttribute('class', `${imgNode.getAttribute('class')} ${parentNode.getAttribute('class') != null ? parentNode.getAttribute('class') : ''}`);
    parentNode.setAttribute('class', '');
    let window = this;
    imgNode.onerror = function () {
      this.src = window.imgUrl[window.type];
    }
  }
}
