import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent {

  src: string = "assets/images/1.jpg";
  srcArr: string[] = [
    "assets/images/1.jpg",
    "assets/images/2.jpg",
    "assets/images/3.jpg",
    "assets/images/4.jpg",
    "assets/images/5.jpg"
  ];

  currentSrcIndex: number = 0;

  displayImg(index: number) {
    this.src = this.srcArr[index]
    this.currentSrcIndex = index
  }

  imgNext() {
    this.stopSlide()
    if (this.currentSrcIndex === this.srcArr.length - 1) {
      alert("this is last image")
    } else {
      this.displayImg(this.currentSrcIndex + 1)
    }
  }

  prevNext() {
    this.stopSlide()
    if (this.currentSrcIndex === 0) {
      alert("this is first image")
    } else {
      this.displayImg(this.currentSrcIndex - 1)
    }
  }


  slideID: any;
  slideRunning:boolean = false;

  slideShow() {
    if (!this.slideRunning) {
      this.slideRunning = true
      let slideBack:boolean = false
      this.slideID = setInterval(() => {
        if (this.currentSrcIndex < this.srcArr.length - 1 && !slideBack || this.currentSrcIndex === 0) {
          this.displayImg(this.currentSrcIndex + 1)
          slideBack = false
        } else if (this.currentSrcIndex > 0 && slideBack) {
          this.displayImg(this.currentSrcIndex - 1)
        } else {
          slideBack = true
        }
      }, 500)
    }
  }

  stopSlide() {
    clearInterval(this.slideID)
    this.slideRunning = false
  }
}
