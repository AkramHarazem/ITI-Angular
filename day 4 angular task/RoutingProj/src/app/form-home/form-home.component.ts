import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-home',
  templateUrl: './form-home.component.html',
  styles: [
  ]
})
export class FormHomeComponent {

Validator = new FormGroup ({
  name: new FormControl ("",[Validators.required , Validators.minLength(3),Validators.pattern(/^[a-zA-Z\s]+$/)]),
  age: new FormControl ("",[Validators.required,Validators.max(40),Validators.min(20),Validators.pattern(/^[0-9]{2}$/)])
})

get formValid (){
  return this.Validator.valid;
}
get nameValid (){
  return this.Validator.controls["name"].valid;
}
get name (){
  return this.Validator.controls["name"].value;
}

get ageValid (){
  return this.Validator.controls["age"].valid;
}

get age (){
  return this.Validator.controls["age"].value;
}
trueClass ="form-control border border-success border-2 bg-light";
falseClass ="form-control border border-danger border-2 bg-light";

AddData(){
  console.log(this.Validator)
  if (this.formValid ){
    alert("Valid Form")
  }else {
    alert("inValid Form")
  }
  }
}
