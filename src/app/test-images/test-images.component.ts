import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { images } from './test-image-responses';

@Component({
  selector: 'test-images',
  templateUrl: './test-images.component.html',
  styleUrls: ['./test-images.component.css']
})
export class TestImagesComponent implements OnInit {
  @Input() ifClicked = true;
  @Output() change = new EventEmitter();
  images: [Object] = images;

  constructor() {}

  onImageClick(imageParams){
    this.ifClicked = !this.ifClicked;
    this.change.emit(imageParams)
  }

  ngOnInit() {
  }

}


// click on testImages --> fires event to app --> changes data --> should fire change to image-form