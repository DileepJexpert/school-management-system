import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../../../services/api.service";
import { StudentsService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  
  student: Student = new Student();
  submitted = false;

  constructor(private formBuilder: FormBuilder,private router: Router, private studentsService: StudentsService) { }

  addForm: FormGroup;

  ngOnInit() {
   

  }
  newEmployee(): void {
    this.submitted = false;
    this.student = new Student();
  }

  save() {
    this.studentsService.createStudent(this.student)
      .subscribe(data => console.log("------------"+data), error => console.log(error));
    this.student = new Student();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }
}
