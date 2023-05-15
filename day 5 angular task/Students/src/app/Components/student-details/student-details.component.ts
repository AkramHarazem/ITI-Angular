import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudService } from 'src/app/Services/stud.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  ID:any;
  SelectedStud:any;
   constructor(route:ActivatedRoute, public oneStudservice:StudService) {
     this.ID = route.snapshot.params['id']
   }
   ngOnInit(): void {
     this.oneStudservice.getStudentById(this.ID).subscribe({
      next: (data) => {this.SelectedStud=data},
      error: (err) => {console.log(err)}
     })
   }
}
