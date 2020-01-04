import { Component, OnInit, Input } from '@angular/core';
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
  stats: any = data["FaceDetails"][0] // will change from type 'object' to 'interface' later
  @Input() newData = this.stats;
  uploadedImage: File;
  form = new FormGroup({
    image: new FormControl()
  });

  ngOnChanges(){
    console.log(this.newData);
    console.log(this.stats);
    this.stats = this.newData.stats.FaceDetails[0];
    this.url = this.newData.src
  }
  onFileUpload(event){
    const formData = new FormData()
    formData.append('image',this.uploadedImage, this.uploadedImage.name)

    this.http.post("https://backend.anharzihan.now.sh/upload", formData)
    .subscribe(response => {
      this.url = response["src"]
      this.stats = response["stats"]["FaceDetails"][0]
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
