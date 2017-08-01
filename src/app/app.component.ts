import { Component } from '@angular/core';
// import { CoursesComponent } from './courses.component';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1><users></users>`,
  // entryComponents: [CoursesComponent],
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
