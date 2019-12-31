import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { data } from './responseObject';
@Component({
  selector: 'image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.css']
})
export class ImageFormComponent implements OnInit {
  url: string;
  stats:any = data["FaceDetails"][0] // will change from type 'object' to 'interface' later
  test = this.stats ? true : false
  uploadedImage: File;
  form = new FormGroup({
    image: new FormControl()
  })
  
  onFileUpload(event){
    const fd = new FormData()
    fd.append('image',this.uploadedImage, this.uploadedImage.name)

    this.http.post("http://localhost:3000/upload/", fd)
    .subscribe(response => {
      console.log(response);
      this.url = response["src"]
      this.stats = response["stats"]["FaceDetails"][0]
    })
  }

  onFileSelected(event){
    this.uploadedImage = event.target.files[0]
  }
  
  constructor(private http: HttpClient) {
    http.get('http://localhost:3000/')
    .subscribe(response => {
      console.log(response);
    })
  }
  
  ngOnInit() {}
}
