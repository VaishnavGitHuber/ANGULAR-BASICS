import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [FormsModule,RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'Project01';
  name:string = "Vaishnav Krishna P";
  age:number = 23;
  phNumber:number = 9876545678;

  // Array : Objects 
  studentMarks = [
    {"sino": 1, "subjects": "Maths", "mark":89},
    {"sino": 2, "subjects": "Chemistry", "mark":97},
    {"sino": 3, "subjects": "Biology", "mark":98},
    {"sino": 4, "subjects": "Hindi", "mark":100},
    {"sino": 4, "subjects": "Biology", "mark":67}
  ]
  
  
  // function : show()
  show(){
    alert("Hello Guys");
  }

}
