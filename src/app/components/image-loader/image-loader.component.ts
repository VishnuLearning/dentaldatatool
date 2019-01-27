import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-loader',
  templateUrl: './image-loader.component.html',
  styleUrls: ['./image-loader.component.css']
})
export class ImageLoaderComponent implements OnInit {

  @Output() imageavailable = new EventEmitter<string>();
  constructor() { }
  ngOnInit() {
  }

  onSelectFileChange($event) {
    //cancel check
    let files = $event.srcElement.files;
    if (files.length > 0) {
      console.log(files);
      if (files.length > 0 && files[0].type.startsWith("image")) {
        //base64 encode file (TODO extract to a service)
        let reader = new FileReader();
        reader.onload = (e) => {
          this.imageavailable.emit((<FileReader>e.target).result.toString());
        };
        reader.readAsDataURL($event.srcElement.files[0]);
      }

    }
  }

}
