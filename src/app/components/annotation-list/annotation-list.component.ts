import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Annotation } from 'src/app/models/annotation';
import { AnnotationService } from 'src/app/services/annotation.service';

@Component({
  selector: 'app-annotation-list',
  templateUrl: './annotation-list.component.html',
  styleUrls: ['./annotation-list.component.css']
})
export class AnnotationListComponent implements OnInit {

  annotations: Annotation[];

  @Output() newannotation = new EventEmitter();

  constructor(private annotationService: AnnotationService) { }


  ngOnInit() {
  }

  getAnnotations(id:string): void {
    this.annotationService.getAnnotations(id).subscribe(x => this.annotations = x);
  }

  addAnnotation():void {
    this.newannotation.emit();
  }

  editCaption(i:number):void {
    this.annotationService.editAnnotationCaption(this.annotations[i].id, this.annotations[i].caption);
  }

  removeAnnotation(i:number):void {
    this.annotationService.removeAnnotation(this.annotations[i].id);
  }
}
