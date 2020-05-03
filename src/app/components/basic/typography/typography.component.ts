import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from '../student.service';
import { Student } from '../student';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export class TypographyComponent implements OnInit {

  students: Observable<Student[]>;

  constructor(private studentService: StudentsService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.students = this.studentService.getStudentList();
  }

  deleteEmployee(id: number) {
    this.studentService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  employeeDetails(id: number){
    console.log("id-----"+id);
    this.router.navigate(['/basic/details', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['update', id]);
  }
}
