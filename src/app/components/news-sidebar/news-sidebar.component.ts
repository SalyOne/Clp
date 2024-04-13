import {Component} from '@angular/core';

@Component({
  selector: 'app-news-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './news-sidebar.component.html',
  styleUrl: './news-sidebar.component.scss'
})
export class NewsSidebarComponent {

  data: { id: number, time: string, date: string, title: string }[] = [
    {
      id: 0,
      time: "08:30",
      date: "01.01.2023",
      title: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა"
    },
    {
      id: 1,
      time: "07:30",
      date: "02.01.2023",
      title: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა"
    },
    {
      id: 2,
      time: "06:30",
      date: "05.01.2023",
      title: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა"
    },
    {
      id: 3,
      time: "05:30",
      date: "02.01.2023",
      title: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა"
    },
    {
      id: 4,
      time: "04:30",
      date: "03.01.2023",
      title: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა"
    },
    {
      id: 5,
      time: "06:30",
      date: "02.01.2023",
      title: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა"
    },
    {
      id: 6,
      time: "05:30",
      date: "02.01.2023",
      title: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა"
    },
    {
      id: 7,
      time: "04:30",
      date: "03.01.2023",
      title: "დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა"
    },
  ]
}
