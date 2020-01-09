import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rekog-fe';
  stats: any;
  url: string;

  onImageChange(e) {
    this.stats = e.stats.FaceDetails[0];
    this.url = e.src;
  }
  onResponse(e) {
    this.url = e.src;
    this.stats = e.stats.FaceDetails[0];
  }
}
