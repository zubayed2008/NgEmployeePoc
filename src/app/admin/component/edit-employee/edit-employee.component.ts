import { Component, OnInit, Input} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from 'src/app/models/Employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  @Input() employee : Employee = new Employee();

  constructor(public activeModal : NgbActiveModal) { }

  ngOnInit(): void {
  }

  EmployeeSave(data : Employee): void {
    this.activeModal.close(data);
  }
}
