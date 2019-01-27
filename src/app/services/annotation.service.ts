import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Annotation } from '../models/annotation';

@Injectable({
  providedIn: 'root'
})
export class AnnotationService {
  private annotations:Annotation[];
  constructor() { 
    this.annotations = new Array<Annotation>();
  }


  getAnnotations(id:String):Observable<Annotation[]> {
    // use id to fetch the annotations from database
    console.log(id);
    return of(this.annotations);
  }

  addAnnotation(l:number, t:number, r:number, b:number, c:string):void {
    let a:Annotation = new Annotation(l, b, r, t, c);
    this.annotations.push(a);
  }

}
