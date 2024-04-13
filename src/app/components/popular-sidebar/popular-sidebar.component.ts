import { Component } from '@angular/core';

@Component({
  selector: 'app-popular-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './popular-sidebar.component.html',
  styleUrl: './popular-sidebar.component.scss'
})
export class PopularSidebarComponent {

  data: { id: number, image: string, title: string }[] = [
    {
      id: 0,
      image: "./assets/images/moon.jpg",
      title: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა"
    },
    {
      id: 1,
      image: "./assets/images/moon.jpg",
      title: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა"
    },
    {
      id: 2,
      image: "./assets/images/moon.jpg",
      title: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა"
    },
    {
      id: 3,
      image: "./assets/images/moon.jpg",
      title: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა"
    },
    {
      id: 4,
      image: "./assets/images/moon.jpg",
      title: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა"
    },
    {
      id: 5,
      image: "./assets/images/moon.jpg",
      title: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა"
    },
    {
      id: 6,
      image: "./assets/images/moon.jpg",
      title: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა"
    },
    {
      id: 7,
      image: "./assets/images/moon.jpg",
      title: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა"
    },
  ]
}
