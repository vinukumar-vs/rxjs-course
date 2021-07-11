import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fromEvent, interval, timer } from 'rxjs';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Using "Interval" observable
    // interval => RxJs observable
    let intervals = interval(1000);
    intervals.subscribe(val => console.log("Interval - stream 1 => " + val));

    // Using "Timer" observable
    // timer => RxJs observable
    let timers = timer(3000, 1000);
    timers.subscribe(val => console.log("Timer - stream 1 => " + val));

    // For "Events" on any elements("fromEvent")
    // fromEvent => RxJs observable
    var clicks = fromEvent(document, 'click');
    clicks.subscribe(evt => console.log("document click ", evt));
  }

}
