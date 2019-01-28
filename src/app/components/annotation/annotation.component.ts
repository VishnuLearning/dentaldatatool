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
  
  
  public get width() : number {
    return (this.annotation.right - this.annotation.left)*this.imageWidth;
  }
  
  public get height() : number {
    return (this.annotation.bottom - this.annotation.top)*this.imageHeight;
  }

  public get left() : number {
    return (this.annotation.left)*this.imageWidth;
  }

  public get top() : number {
    return (this.annotation.top)*this.imageHeight;
  }

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
