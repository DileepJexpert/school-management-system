import { Component, OnInit } from '@angular/core';
import {ToastData, ToastOptions, ToastyService} from 'ng2-toasty';
import { Student } from '../../basic/student';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../../basic/student.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
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

  
}
