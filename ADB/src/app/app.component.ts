import { logging } from 'protractor';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ADB';
  course = 'Angular';
  image = 'https://www.monterail.com/hubfs/angular2.jpg'

  goBack(): void{}
}
