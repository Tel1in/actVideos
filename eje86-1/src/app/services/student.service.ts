import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = new Array();


  constructor() { 
    this.students.push({
      name: 'Pablo Tello Ortega',
      controlnumber : '17401085',
      active : true 

    });
    this.students.push({
      name: 'Pedro Tello Ortega',
      controlnumber : '17401086',
      active : false 

    });
    this.students.push({
      name: 'Cesar Alejandro Alvares Rodriguez',
      controlnumber : '21415121',
      active : true 

    });
    this.students.push({
      name: 'Susana Plata Vazquez',
      controlnumber : '41245123',
      active : false 

    });
  }

  getStudents(): Student[]{
    return this.students;
  }

  changeStatus(position : number): void{
    this.students[position].active=!this.students[position].active;
  }

  deleteStudent(position: number): void{
    this.students.splice(position, 1);
  }

  newStudent(student: Student):void {
    this.students.push(student);
  }
}
