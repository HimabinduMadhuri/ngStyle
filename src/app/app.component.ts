import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
     marks:number = 45 ;
    resultColor: string = "";

    constructor(){
    if(this.marks>=35){
      this.resultColor = "green";

    }
    else{
      this.resultColor = "red"
    }
  }

}
