import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent {
  @Input()
  img: string = "";

  @Input()
  title: string = "";

  @Input()
  founder: string = "";

  @Input()
  mascot: string = "";

  @Input()
  colors: string = "";

  @Input()
  ghost: string = "";

  @Input()
  quality: string = "";
}
