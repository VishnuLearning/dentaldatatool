import { Component, OnInit, Input } from '@angular/core';
import { Annotation } from 'src/app/models/annotation';

@Component({
  selector: 'app-annotation',
  templateUrl: './annotation.component.html',
  styleUrls: ['./annotation.component.css']
})
export class AnnotationComponent implements OnInit {

  @Input() annotation:Annotation;
  @Input() imageWidth:number;
  @Input() imageHeight:number;

  constructor() {
    
   }

  ngOnInit() {
    console.log(this.annotation.caption);
  }

  getLeft():number {
    return this.annotation.left; //consider as a number between 0/1
    //get the image dimensions and multiply by image width
  }

}
