import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rekog-fe';
  stats: any;
  testDataChanged: boolean = false;

  onImageChange(e){
    this.stats = e
    this.testDataChanged = !this.testDataChanged
    console.log(this.stats);
  }
}
