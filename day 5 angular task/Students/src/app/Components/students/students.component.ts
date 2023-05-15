import {
  Component,
  OnInit
} from '@angular/core';
import {
  StudService
} from 'src/app/Services/stud.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  constructor(public studServices: StudService) {};
  students: any;
  ngOnInit(): void {
    this.studServices.getAllStudents().subscribe({
      next: (data) => {
        this.students = data
      },
      error: (err) => {
        console.log(err)
      },
    })
  };

  deleteStud(id: any) {
    if (confirm('Are you sure to delete this student data?')) {
      this.studServices.deleteStudent(id).subscribe({
        next: () => {
          this.students = this.students.filter((s: any) => s.id !== id);
        }
      })
    }
  }
}
