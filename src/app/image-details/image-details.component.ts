import { Component, Input } from '@angular/core';
import { data } from './responseObject';

@Component({
  selector: 'image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent {
  // when loading local data
  stats = data.stats.FaceDetails[0];
  url = data.src;

  // when fetching data from api
  @Input() newURL: string;
  @Input() newData: any;

  ngOnChanges() {
    if (this.newData) {
      this.url = this.newURL;
      this.stats = this.newData;
    }
  }
}
