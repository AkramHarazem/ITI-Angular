import {Component,OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import {StudService} from 'src/app/Services/stud.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(public studServices: StudService, private dialog:MatDialog) {};

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

  deleteStud (id:any){
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{
      width: '300px',
      data: {
        title: 'Delete',
        message: 'Are you sure you want to delete this student data?',
        confirm: 'Delete',
        cancel: 'Cancel'
      }
    });

    dialogRef.afterClosed().subscribe( result=> {
      if (result === true){
        this.studServices.deleteStudent(id).subscribe({
          next: () => {
            this.students = this.students.filter((s: any) => s.id !== id);
          }
        })
      }
    });
  }
}
