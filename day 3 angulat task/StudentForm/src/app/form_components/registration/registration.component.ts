import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: []
})
export class RegistrationComponent {
  name = "";
  age = "";
  get nameValid() {
    return /^[a-zA-Z\s]{3,}$/.test(this.name)
  }
  get ageValid() {
    return /^[0-9]{2}$/.test(this.age) && +this.age <= 40 && +this.age >= 20
  }
  @Output() myEvent = new EventEmitter();

  studData() {
    if (this.name && this.age && this.ageValid && this.nameValid) {
      this.myEvent.emit({ name: this.name,age: this.age})
    }
    // console.log({name:this.name, age:this.age})
    this.name = "";
    this.age = "";
  }
  enterKey(e:any){
    // console.log(e)
      if (e.keyCode == 13){
      this.studData()
    }
  }
}
