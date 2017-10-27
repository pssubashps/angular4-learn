import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  allowNewStudent:boolean = false;
  studentCreationMessage:string = "";
  constructor() { 
    setTimeout(()=>{
      this.allowNewStudent = true;
    },5000)
  }

  ngOnInit() {
  }
   

  onAddStudent () {
    this.studentCreationMessage = "Student Added";
  }
}
