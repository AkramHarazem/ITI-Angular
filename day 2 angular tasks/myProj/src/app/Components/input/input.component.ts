import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  text = "";
  // getdata (e:any){
  //   console.log(e.target.value)
  //   this.text = e.target.value;
  // }
  // onChange(){
  //   console.log(this.text)
  // }
  ClearText() {
    this.text = "";
  }
}
