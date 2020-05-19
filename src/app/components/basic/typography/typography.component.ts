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
    {headerName: 'adharNumber', field: 'adharNumber', sortable: true, filter: true, checkboxSelection: true, suppressSizeToFit: true,},
    {headerName:'FirstName', field:'dateOfBirth', colId:'dateOfBirth', filter:'agTexxtFilter',suppressSizeToFit: true,}, 
    {headerName:'LastName', field:'adharNumber', colId:'adharNumber', filter:'agTexxtFilter',suppressSizeToFit: true,} ,
   

            {headerName: 'Edit', field: 'studentName',  resizable: true ,width: 90,
                cellRenderer : function(params){
                    return '<div><button (click)="updateEmployee(student.id)" class="btn btn-info btn-sm" ><i class="fa fa-edit"></i>edit</button></div>'
                }
                
            },

            {headerName: 'Details', field: 'studentName',  resizable: true ,width: 90,
                cellRenderer : function(params){
                    return '<div><button (click)="employeeDetails(student._id)" class="btn btn-success btn-sm" ><i class="fa fa-info-circle"></i>info</button></div>'
                }
                
            },

            {headerName: 'TakeFee', field: 'studentName',  resizable: true ,width: 100,
                cellRenderer : function(params){
                    return '<div><button (click)="employeeDetails(student._id)" class="btn btn-secondary btn-sm" ><i class="fa fa-info-circle"></i>TakeFee</button></div>'
                }
                
            },
            {headerName: 'Delete', field: 'studentName',  resizable: true ,width: 90, suppressSizeToFit: true,
            cellRenderer : function(params){
                return '<button (click)="deleteEmployee(student.id)" class="btn btn-danger  btn-sm"><i class="fa fa-trash-o"></i></button></div>'
            }
            
        }
  ];

  public rowData: Student[] = [];

  constructor(private studentService: StudentsService, private http: HttpClient,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
     this.studentService.getStudentList().subscribe((data) =>{
       console.log("---------"+data);
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
