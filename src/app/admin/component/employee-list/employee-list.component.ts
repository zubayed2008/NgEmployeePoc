import { Component, OnInit } from '@angular/core';
import {Employee} from './../../../models/Employee';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];

  currentEmployee? : Employee = new Employee();

  newEmployee? : Employee = new Employee();

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() : void {
      this.employees = [
        {
        EmployeeID : "001",
        EmployeeName : "Zubayed 001",
        JoiningDate : new Date("05/04/2019"),
        Gender : "Male",
        Role : "Member",
        Department : "Development"
      },
      {
        EmployeeID : "002",
        EmployeeName : "Mizan 002",
        JoiningDate : new Date("05/04/2021"),
        Gender : "Male",
        Role : "Member",
        Department : "Admin"
      },
      {
        EmployeeID : "003",
        EmployeeName : "Selim 002",
        JoiningDate : new Date("05/04/2020"),
        Gender : "Male",
        Role : "Member",
        Department : "Member"
      }
    ];
  }

  edit(employeeEdit : any, employeeId : any | string) : void {
    this.modalService.open(employeeEdit);
    this.currentEmployee = new Employee();
    this.currentEmployee = this.employees.filter(m => m.EmployeeID == employeeId)[0];
  }

  delete(employeeDelete : any) : void {
    this.modalService.open(employeeDelete);
  }

  add(employeeAdd : any) : void {
    this.modalService.open(employeeAdd);
  }


  addEmployeeModal() : void{
    console.log(this.newEmployee?.EmployeeID);
    if(this.newEmployee?.EmployeeID !== undefined){
      this.employees.push(this.newEmployee!);
    }
    this.modalService.dismissAll();
  }
}
