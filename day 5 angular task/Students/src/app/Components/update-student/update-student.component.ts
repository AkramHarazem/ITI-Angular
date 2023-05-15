import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudService } from 'src/app/Services/stud.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  ID:any;
  SelectedStud:any;
  Validator:any;
constructor(private updateServices:StudService, route:ActivatedRoute, private rou:Router){
   this.ID = route.snapshot.params['id']
}

ngOnInit(): void {
  this.updateServices.getStudentById(this.ID).subscribe({
    next: (data)=>{
      this.SelectedStud=data;

      this.Validator = new FormGroup ({
        fname: new FormControl(this.SelectedStud.Fname,[Validators.required,Validators.minLength(3),Validators.pattern(/^[a-zA-Z\s]+$/)]),
        lname: new FormControl(this.SelectedStud.Lname,[Validators.required,Validators.minLength(3),Validators.pattern(/^[a-zA-Z\s]+$/)]),
        email: new FormControl(this.SelectedStud.email,[Validators.required,Validators.pattern(/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{3}$/)]),
        street: new FormControl(this.SelectedStud.address.street,[Validators.required,Validators.pattern(/^[a-zA-Z0-9\s\.]+$/)]),
        city: new FormControl(this.SelectedStud.address.city,[Validators.required,Validators.pattern(/^[a-zA-Z\s]+$/)]),
        phone: new FormControl(this.SelectedStud.phone,[Validators.required,Validators.pattern(/^(011|012|010)[0-9]{8}$/)])
      })
    },
    error: (err)=>{console.log(err)}
  })

}

get formValid (){
  return this.Validator.valid;
}
get fnameValid (){
  return this.Validator.controls['fname'].valid;
}
get lnameValid (){
  return this.Validator.controls['lname'].valid;
}
get emailValid (){
  return this.Validator.controls['email'].valid;
}
get streetValid (){
  return this.Validator.controls['street'].valid;
}
get cityValid (){
  return this.Validator.controls['city'].valid;
}
get phoneValid (){
  return this.Validator.controls['phone'].valid;
}

trueClass ="form-control border border-success border-2 bg-light w-75";
falseClass ="form-control border border-danger border-2 bg-light w-75";


updateStud(Fname:any,Lname:any,email:any,street:any,city:any,phone:any){
  if(this.formValid){
    if( confirm('do want to update these data?')){
      let updatedData = {
      Fname,
      Lname,
      email,
      address: {street,city}
      ,phone}
      this.updateServices.updateStudent(this.ID,updatedData).subscribe();
      this.rou.navigate(['/'])
    }
  }else{
    alert ('form invalid, check red boxes')
  }

}
}
