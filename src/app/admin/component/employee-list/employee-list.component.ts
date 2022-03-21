import { Component, OnInit } from '@angular/core';
import {Employee} from './../../../models/Employee';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { DeleteEmployeeComponent } from '../delete-employee/delete-employee.component';

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
      },
      {
        EmployeeID : "004",
        EmployeeName : "Konica 004",
        JoiningDate : new Date("05/04/2020"),
        Gender : "Female",
        Role : "Member",
        Department : "Member"
      }
    ];
  }


  edit(employeeId : any | string) : void {
       const editEmployeeModal = this.modalService.open(EditEmployeeComponent);
       let selectedEmployee = new Employee();
       selectedEmployee = this.employees.filter(m => m.EmployeeID == employeeId)[0];
       let index = this.employees.indexOf(selectedEmployee);
       editEmployeeModal.componentInstance.employee = selectedEmployee;
       editEmployeeModal.result.then((result : Employee) => {
         if (result){
           this.employees[index] = result;
           console.log(this.employees);
         }});
    }

  delete(employeeId : any | string) : void {
    const deleteEmployeeModal = this.modalService.open(DeleteEmployeeComponent);
    let selectedEmployee = new Employee();
    selectedEmployee = this.employees.filter(m => m.EmployeeID == employeeId)[0];
    let index = this.employees.indexOf(selectedEmployee);
    deleteEmployeeModal.result.then((result : boolean) => {
      if (result){
        this.employees.splice(index,1);
        //console.log(this.employees);
      }});
  }

  addEmployee() : void {
    const addEmployeeModal = this.modalService.open(AddEmployeeComponent);
    addEmployeeModal.result.then((result : Employee) => {
      if (result){
        //console.log(result);
        if(result.EmployeeID !== undefined){
          this.employees.push(result);
        }
      }});
  }


  addEmployeeModal() : void{
    console.log(this.newEmployee?.EmployeeID);
    if(this.newEmployee?.EmployeeID !== undefined){
      this.employees.push(this.newEmployee!);
    }
    this.modalService.dismissAll();
  }
}
