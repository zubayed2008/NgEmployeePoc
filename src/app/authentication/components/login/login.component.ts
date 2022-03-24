import { Component, OnInit, Inject} from '@angular/core';
import { User } from '../../models/user.model';
import { AuthenticationService } from '../../authentication.service';
import { LibraryConfig } from '../../models/config';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ROLE } from 'src/app/shared/Enums/role';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : User = new User();
  error : string = "";

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    @Inject('config') private config: LibraryConfig
    ) { }

  ngOnInit(): void {
  }

  login(loginForm : User) : void{
  const user = loginForm;
  this.authService.login(user)
  .pipe(first())
  .subscribe(
    data => {
        console.log(data.token);
        if(data.token == ROLE.ADMIN){
          this.router.navigate(['/employees']);
        }
        else if(data.token == ROLE.USER){
          this.router.navigate(['/users']);
        }
    },
    error => {
        console.log(error);
        this.error = error;
    });
  }

}
