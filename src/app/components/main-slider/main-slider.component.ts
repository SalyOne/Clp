import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import Swiper from "swiper";

@Component({
  selector: 'app-main-slider',
  standalone: true,
  imports: [],
  templateUrl: './main-slider.component.html',
  styleUrl: './main-slider.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainSliderComponent implements OnInit{
  ngOnInit(): void {
    new Swiper('swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination:{
        clickable:true
      }
    });

  }



}
