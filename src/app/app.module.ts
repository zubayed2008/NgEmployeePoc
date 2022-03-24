import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './admin/component/employee-list/employee-list.component';
import { AddEmployeeComponent } from './admin/component/add-employee/add-employee.component';
import { EditEmployeeComponent } from './admin/component/edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './admin/component/delete-employee/delete-employee.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing-module';
import { AuthenticationModule } from './authentication/authentication.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MockBackendInterceptor } from './mock-backend/mock-backend.interceptor';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserAddComponent } from './user/user-add/user-add.component';

export const AUTHENTICATION_CONFIG = {
  authEndpoint: "/users/authenticate",
  initialPage: "login"
};
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    DeleteEmployeeComponent,
    NotFoundComponent,
    UserListComponent,
    UserAddComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    AuthenticationModule.forRoot(AUTHENTICATION_CONFIG)
  ],
  entryComponents: [
    AddEmployeeComponent ,
    EditEmployeeComponent,
    DeleteEmployeeComponent ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MockBackendInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
