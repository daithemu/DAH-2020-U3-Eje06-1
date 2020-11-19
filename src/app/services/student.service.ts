import { Injectable } from '@angular/core';
import {Student} from "../models/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = new Array();

  constructor() {
    this.students.push({
      name: 'Daniela Itzel Hernandez Muñoz',
      controlnumber: '16400929',
      active: true
    });
    this.students.push({
      name: 'Pedro Pérez ',
      controlnumber: '16400928',
      active: true
    });
    this.students.push({
      name: 'Daniela Itzel Hernandez Nuñez',
      controlnumber: '16400927',
      active: false
    });
   }

   getStudents(): Student[]{
     return this.students;
   }

   changeStatus(position: number): void{
     this.students[position].active = !this.students[position].active;
   }

   deleteStudent(position: number){

   }
} 
