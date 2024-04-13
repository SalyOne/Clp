import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {MainSliderComponent} from "./components/main-slider/main-slider.component";
import {FactsSliderComponent} from "./components/facts-slider/facts-slider.component";
import {NewsSidebarComponent} from "./components/news-sidebar/news-sidebar.component";
import {PopularSidebarComponent} from "./components/popular-sidebar/popular-sidebar.component";
import {BlogComponent} from "./components/blog/blog.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainSliderComponent, FactsSliderComponent, NewsSidebarComponent, PopularSidebarComponent, BlogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Clp';
}
