import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { AnnotationBoardComponent } from './components/annotation-board/annotation-board.component';
import { AnnotationListComponent } from './components/annotation-list/annotation-list.component';
import { ImagedetailsComponent } from './components/imagedetails/imagedetails.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dentalDataTool';
  top:number=0;
  left:number=0;
  @ViewChild('annotationBoard') annotationBoard: AnnotationBoardComponent;
  @ViewChild('annotationList') annotationList: AnnotationListComponent;
  @ViewChild('annotationImage') annotationImage: ImagedetailsComponent;
  @ViewChild('board') board:ElementRef;

  bootstrapAnnotations(id:string) {
    this.annotationBoard.getAnnotations(id);
    this.annotationList.getAnnotations(id);
  }

  bootstrapNewAnnotation() {
    this.annotationBoard.getNewAnnotation();
  }

  bootstrapImage(image:string) {
    this.annotationImage.setImage(image);
  }

  private getPos(el) {
      // yay readability
      for (var lx=0, ly=0;
          el != null;
          lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
      return {x: lx,y: ly};
  }

  ngOnInit() {
    let pos = this.getPos(this.board.nativeElement);
    this.top = pos.y;
    this.left = pos.x;
    console.log("app-component: ", this.top, this.left);
  }
}
