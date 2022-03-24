import { Component, OnInit, Inject} from '@angular/core';
import { User } from '../../models/user.model';
import { AuthenticationService } from '../../authentication.service';
import { LibraryConfig } from '../../models/config';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

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
        console.log(data);
        this.router.navigate(['/employees']);
    },
    error => {
        console.log(error);
        this.error = error;
    });
  }

}
