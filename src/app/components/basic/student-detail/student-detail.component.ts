import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  id: string;
  student: Student = null;
  showActions: boolean = false;
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: StudentsService) { }

  ngOnInit() {
    this.student = new Student();

    this.id = this.route.snapshot.params['id'];
    console.log("this.id----------"+this.id);
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log("--------------in side detail compnent"+data.firstName)
        this.student = data;
        this.showActions =true;
      }, error => console.log(error));

   
  }

  list(){
    this.router.navigate(['employees']);
  }
}
