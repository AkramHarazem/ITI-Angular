import {Component,OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import {StudService} from 'src/app/Services/stud.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(public studServices: StudService, private dialog:MatDialog, private http:HttpClient) {};

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
            // this.rearrangeStudIDs();
          }
        })
      }
    });
  }
  // private rearrangeStudIDs(): void {
  //   for (let i = 0; i < this.students.length; i++) {
  //     this.students[i].id = i + 1;
  //   }
  // }
  // private UpdateID ():void {
  //   let updateStud = this.students.forEach((stud:any,index=0)=>{
  //     this.studServices.updateStudent(id,{...stud,id:index+1}).subscribe();
  //   });
  // }
  // private UpdateID ():void {
  //   let updateStud = this.students.map((stud:any,index:any)=>{
  //     return {...stud, id:index+1}
  //   });
  //   this.studServices.updateStudents(updateStud).subscribe();
  // }
}
