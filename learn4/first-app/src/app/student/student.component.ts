import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentId:number = 111;
  studentName:string = "Subash";
  studentStatus:string = "Present";

  constructor() { }

  ngOnInit() {
  }

  getStudentStatus() {
    return this.studentStatus;
  }

 
}
