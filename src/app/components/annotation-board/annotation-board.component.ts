import { Component, OnInit, HostListener, ViewChild, ElementRef, Input } from '@angular/core';
import { AnnotationService } from 'src/app/services/annotation.service';
import { Annotation } from 'src/app/models/annotation';

@Component({
  selector: 'app-annotation-board',
  templateUrl: './annotation-board.component.html',
  styleUrls: ['./annotation-board.component.css']
})
export class AnnotationBoardComponent implements OnInit {
  annotations: Annotation[];
  private mouseDown: boolean = false;
  startx:number = 0;
  starty:number = 0;
  private listen:boolean = false;
  scratchon: string = "hidden";
  scratchwidth: number = 0;
  scratchheight: number = 0;

  @ViewChild('container') containerDiv: ElementRef;
  @ViewChild('scratchpad') scratchpad: ElementRef;

  @Input() top:number;
  @Input() left:number;

  constructor(private annotationService: AnnotationService) { }

  ngOnInit() {
    console.log(this.left, this.top);
  }

  getAnnotations(id:string): void {
    this.annotationService.getAnnotations(id).subscribe(x => this.annotations = x);
  }

  getX(x:number) {
    return x - this.left;
  }

  getY(y:number) {
    return y - this.top;
  }

  getNewAnnotation() {
    this.listen = true;
    console.log("listening");
  }

  enableScratchPad() {
    this.scratchon = "visible";
    console.log("scratch on");
  }

  disableScratchPad() {
    this.scratchon = "hidden";
    this.scratchwidth = 0;
    this.scratchheight = 0;
    this.listen = false;
  }

  @HostListener('mouseup', ['$event'])
  onMouseup(event: MouseEvent) {
    if(!this.listen) return;
    if(event.button!=0) return;
    if(this.mouseDown) {
      this.mouseDown = false;
      let t = prompt("Caption");
      console.log(this.startx, this.starty, this.scratchwidth, this.scratchheight);
      this.annotationService.addAnnotation(this.startx, this.starty, this.startx+this.scratchwidth, this.starty+this.scratchheight, t);
      this.disableScratchPad();
    }
    else {
    }
  }

  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    if(!this.listen) return;
    if(event.button!=0) return;
    if (this.mouseDown) {
      let x = this.getX(event.clientX);
      let y = this.getY(event.clientY);
      this.scratchwidth = Math.abs(x - this.startx);
      this.scratchheight = Math.abs(y - this.starty);
      this.startx = Math.min(x, this.startx);
      this.starty = Math.min(y, this.starty);
      //console.log(this.startx, this.starty, x, y);
    }
  }

  

  @HostListener('mousedown', ['$event'])
  onMousedown(event: MouseEvent) {
    if(!this.listen) return;
    if(event.button!=0) return;
    // later may need to add some cases for edit existing annotation
    this.mouseDown = true;
    this.startx = this.getX(event.clientX);
    this.starty = this.getY(event.clientY);
    console.log(this.startx, this.starty);
    this.enableScratchPad();
    console.log(this.left, this.top);
  }

}
