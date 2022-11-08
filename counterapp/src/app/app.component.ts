import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counterapp';
  counter = 0;

  resetbtn(){
    this.counter = 0
  }
  incrbtn(){
    this.counter = this.counter+1;
  }
  decrbtn(){
    this.counter = this.counter-1
    if(this.counter <0){
      this.counter = 0;
    }
  }
}
