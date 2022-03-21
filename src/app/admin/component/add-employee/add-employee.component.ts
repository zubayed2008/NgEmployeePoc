import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from 'src/app/models/Employee';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee : Employee = new Employee();

  constructor(public activeModal : NgbActiveModal) { }

  ngOnInit(): void {
  }

  EmployeeSave(employee:Employee): void{
    this.activeModal.close(employee);
  }

}
