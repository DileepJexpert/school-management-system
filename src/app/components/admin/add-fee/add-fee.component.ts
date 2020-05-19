import { Component, OnInit } from '@angular/core';
import { FeeService } from '../fee-services';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AddFee } from './addFee';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-fee',
  templateUrl: './add-fee.component.html',
  styleUrls: ['./add-fee.component.css']
})
export class AddFeeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router,
    private feeService: FeeService) { }
    fees: Observable<AddFee[]>;
  
    fee: AddFee = new AddFee();
    submitted = false;
  ngOnInit() {
    this.reloadData();
  }
  save() {
    this.feeService.createFee(this.fee)
      .subscribe(data => console.log("------------"+data), error => console.log(error));
    this.fee = new AddFee();
    console.log('--------------------Product created!');
      //this.router.navigateByUrl('/crud/home/');
      this.reloadData();
    
  }
  reloadData() {
    this.fees = this.feeService.getAll();
    console.log('--------------------Product created!' +this.fees);
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }
}
