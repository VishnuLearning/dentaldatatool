import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Annotation } from '../models/annotation';

@Injectable({
  providedIn: 'root'
})
export class AnnotationService {
  private annotations:Annotation[];
  private annotationIndex:number = 0;
  constructor() { 
    this.annotations = new Array<Annotation>();
  }


  getAnnotations(id:String):Observable<Annotation[]> {
    // use id to fetch the annotations from database
    console.log(id);
    return of(this.annotations);
  }

  addAnnotation(l:number, t:number, r:number, b:number, c:string):void {
    for(var i=0; i<this.annotations.length; i++) {
      console.log(this.annotations[i].caption);
    }
    this.annotationIndex++;
    let a:Annotation = new Annotation(this.annotationIndex, l, b, r, t, c);
    this.annotations.push(a);
    console.log(l, t, r, b);
  }

  removeAnnotation(id:number):void {
    for(var i=0; i<this.annotations.length; i++) {
      if (this.annotations[i].id==id) break;
    }
    if(i<this.annotations.length) {
      this.annotations.splice(i, 1);
    }
  }

  editAnnotationCaption(id:number, caption:string):void {
    for(var i=0; i<this.annotations.length; i++) {
      if (this.annotations[i].id==id) break;
    }
    if(i<this.annotations.length) {
      this.annotations[i].caption = caption;
    }
  }

}
