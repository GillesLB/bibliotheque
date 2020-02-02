import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-test',
  templateUrl: './pie-test.component.html',
  styleUrls: ['./pie-test.component.css']
})
export class PieTestComponent implements OnInit {

  value = {quote: 90, max: 100};

  constructor() { }

  ngOnInit() {
  }

}
