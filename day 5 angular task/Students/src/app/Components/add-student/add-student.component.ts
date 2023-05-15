import {
  Component
} from '@angular/core';
import {
  StudService
} from 'src/app/Services/stud.service';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  Router
} from '@angular/router';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  constructor(public addService: StudService, public rou: Router) {}

  Validator = new FormGroup({
    fname: new FormControl("", [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]+$/)]),
    lname: new FormControl("", [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]+$/)]),
    email: new FormControl("", [Validators.required, Validators.pattern(/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{3}$/)]),
    street: new FormControl("", [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s\.]+$/)]),
    city: new FormControl("", [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]),
    phone: new FormControl("", [Validators.required, Validators.pattern(/^(011|012|010)[0-9]{8}$/)])
  })


  // get fname (){
  //   return this.Validator.controls['fname'].value;
  // }
  // get lname (){
  //   return this.Validator.controls['lname'].value;
  // }
  // get email (){
  //   return this.Validator.controls['email'].value;
  // }
  // get street (){
  //   return this.Validator.controls['street'].value;
  // }
  // get city (){
  //   return this.Validator.controls['city'].value;
  // }
  // get phone (){
  //   return this.Validator.controls['phone'].value;
  // }

  get formValid() {
    return this.Validator.valid
  }
  get fnameValid() {
    return this.Validator.controls['fname'].valid;
  }
  get lnameValid() {
    return this.Validator.controls['lname'].valid;
  }
  get emailValid() {
    return this.Validator.controls['email'].valid;
  }
  get streetValid() {
    return this.Validator.controls['street'].valid;
  }
  get cityValid() {
    return this.Validator.controls['city'].valid;
  }
  get phoneValid() {
    return this.Validator.controls['phone'].valid;
  }

  // newStud:any = {fname:this.fname,lname:this.lname,email:this.email,street:this.street,city:this.city,phone:this.phone}

  AddUser(Fname: any, Lname: any, email: any, street: any, city: any, phone: any) {
    if (this.formValid) {
      if (confirm('do you want to add this student?')) {
        let newStud: any = {
          Fname,
          Lname,
          email,
          address: {
            street,
            city
          },
          phone
        }
        this.addService.createStudent(newStud).subscribe()
        alert('Added successfully')
        this.rou.navigate(['/'])
      }
    } else {
      alert('form invalid, check red boxes')
    }
  }

  trueClass = "form-control border border-success border-2 bg-light w-75";
  falseClass = "form-control border border-danger border-2 bg-light w-75";
}
