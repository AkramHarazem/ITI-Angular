import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'StudentForm';
  StudentData: {name: string, age: string}[] = [];
  getData(e: any) {
    this.StudentData.push(e)
    // console.log(e)
    // console.log(this.StudentData)
  }
}
