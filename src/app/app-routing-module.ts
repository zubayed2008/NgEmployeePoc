import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { EmployeeListComponent } from "./admin/component/employee-list/employee-list.component";
import { LoginComponent } from "./authentication/components/login/login.component";
import { AuthenticationGuard } from "./authentication/guards/authentication.guard";
import { RoleGuard } from "./authentication/guards/role.guard";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";
import { ROLE } from "./shared/Enums/role";
import { UserListComponent } from "./user/user-list/user-list.component";

const routes: Routes = [
  //{path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent, canActivate: [AuthenticationGuard]},
  {path: 'employees', component: EmployeeListComponent, canActivate: [AuthenticationGuard, RoleGuard], data: {expectedRole: ROLE.ADMIN}},
  {path: 'users', component: UserListComponent, canActivate: [AuthenticationGuard, RoleGuard], data: {expectedRole: ROLE.USER}},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
