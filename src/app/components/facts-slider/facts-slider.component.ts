import {Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit} from '@angular/core';
import Swiper from "swiper";
import {SwiperContainer} from "swiper/swiper-element";
// import {Swiper} from "swiper/types";

@Component({
  selector: 'app-facts-slider',
  standalone: true,
  imports: [],
  templateUrl: './facts-slider.component.html',
  styleUrl: './facts-slider.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FactsSliderComponent implements OnInit{
  constructor(private el: ElementRef<SwiperContainer>) { }
  ngOnInit(): void {
    // new Swiper('SwiperContainer', {
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    //   grid: {
    //     rows: 3,
    //   },
    //   pagination:{
    //     clickable:true
    //   }
    // });

  }
}
