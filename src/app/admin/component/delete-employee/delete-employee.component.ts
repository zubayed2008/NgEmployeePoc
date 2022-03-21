import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  constructor(public activeModal : NgbActiveModal) { }

  ngOnInit(): void {
  }

  EmployeeDelete(data : boolean): void {
    this.activeModal.close(data);
  }
}
