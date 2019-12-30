import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.css']
})
export class ImageFormComponent implements OnInit {
  url: string;
  uploadedImage: File = null;
  form = new FormGroup({
    image: new FormControl()
  })
  
  onFileUpload(event){
    const fd = new FormData()
    fd.append('image',this.uploadedImage, this.uploadedImage.name)

    this.http.post("http://localhost:3000/upload/", fd)
    .subscribe(response => {
      console.log(response["src"]);
      this.url = response["src"]
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
  
  ngOnInit() {
  }

}
