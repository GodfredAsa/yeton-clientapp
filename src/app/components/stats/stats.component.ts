import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {

  @Input() title: string;
  @Input() value: Number;
  @Input() symbol: string;

}
