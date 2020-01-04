import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.css']
})
export class ImageFormComponent implements OnInit {
  @Output() responseReceived = new EventEmitter()
  uploadedImage: File;
  form = new FormGroup({
    image: new FormControl()
  });

  onFileUpload(event){
    const formData = new FormData()
    formData.append('image',this.uploadedImage, this.uploadedImage.name)

    this.http.post("https://backend.anharzihan.now.sh/upload", formData)
    .subscribe(response => {
      this.responseReceived.emit(response)
    })
  }

  onFileSelected(event){
    this.uploadedImage = event.target.files[0]
  }
  
  constructor(private http: HttpClient) {
  }
  
  ngOnInit() {
    this.http.get('https://backend.anharzihan.now.sh/')
    .subscribe(response => {
      console.log(response);
    })
  }
}
