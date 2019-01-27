import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-imagedetails',
  templateUrl: './imagedetails.component.html',
  styleUrls: ['./imagedetails.component.css']
})
export class ImagedetailsComponent implements OnInit {

  @ViewChild('image') image: ElementRef;

  private source: string;

  @Output() setup = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {

  }

  setImage(image:string) {
    this.source = image;
  }

  setupBoard() {
    // bootstrap annotations
    // raise an event here that image load is complete
    this.setup.emit('0');
  }

}
