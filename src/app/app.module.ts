import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './admin/component/employee-list/employee-list.component';
import { AddEmployeeComponent } from './admin/component/add-employee/add-employee.component';
import { EditEmployeeComponent } from './admin/component/edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './admin/component/delete-employee/delete-employee.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './router/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    DeleteEmployeeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule
  ],
  entryComponents: [
    AddEmployeeComponent ,
    EditEmployeeComponent,
    DeleteEmployeeComponent ],
  providers: [],
  bootstrap: [
  AppComponent]
})
export class AppModule { }
