import { ImageService } from './../services/image-services/image.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.css']
})
export class ImageFormComponent implements OnInit {
  loading: boolean = false;
  @Output() responseReceived = new EventEmitter()
  uploadedImage: File;
  form = new FormGroup({
    image: new FormControl()
  });
  // this is another test
  constructor(private service: ImageService) {}

  onFileUpload(){
    const formData = new FormData()
    formData.append('image',this.uploadedImage, this.uploadedImage.name)
    this.loading = true;
    this.service.uploadImage(formData)
    .subscribe(response => {
      this.loading = false;
      this.responseReceived.emit(response)
    })
  }
  
  onFileSelected(event){
    this.uploadedImage = event.target.files[0]
  }
  
  ngOnInit() {
    this.service.checkAppStatus()
    .subscribe(response => {
      console.log(response);
    })
  }
}
