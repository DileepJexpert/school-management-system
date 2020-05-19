import { Component, OnInit,ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from '../student.service';
import { Student } from '../student';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export class TypographyComponent implements OnInit {


  students: Array<Student>;
  columnDefs=[
    {headerName:'FirstName', field:'firstName', colId:'firstName', filter:'agTexxtFilter'}, 
    {headerName:'LastName', field:'lastName', colId:'firstName', filter:'agTexxtFilter'} 
  ];

  public rowData: Student[] = [];

  constructor(private studentService: StudentsService, private http: HttpClient,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
     this.studentService.getStudentList().subscribe((data) =>{
      this.rowData = data;
      this.students = data;
    });

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
