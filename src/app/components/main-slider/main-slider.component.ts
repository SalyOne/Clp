import {AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild} from '@angular/core';
import Swiper from "swiper";

@Component({
  selector: 'app-main-slider',
  standalone: true,
  imports: [],
  templateUrl: './main-slider.component.html',
  styleUrl: './main-slider.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainSliderComponent implements AfterViewInit{
  @ViewChild('swiperContainer') swiperContainer: any;
  swiper!: Swiper;

  constructor() { }

  ngAfterViewInit() {
    this.swiper = new Swiper(this.swiperContainer.nativeElement, {
      navigation: {
        nextEl: '.custom-arrow-next',
        prevEl: '.custom-arrow-prev',
      },
      // other options...
    });
  }

  prevSlide() {
    console.log("Asdasd")
    this.swiper.slidePrev();
  }

  nextSlide() {
    this.swiper.slideNext();
  }
}
