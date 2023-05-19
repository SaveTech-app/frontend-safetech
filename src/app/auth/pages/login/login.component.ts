import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  newStudent: any;
  loginForm: FormGroup;
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private _formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    // public dialog: MatDialog
  ) { 
    // this.isLogged()
  }

  ngOnInit(){
    this.loginForm = this._builderForm();
  }



  _builderForm() {
    // const pattern = '[a-zA-Z ]{2,254}';
    const form = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],     
    });

    return form;
  }

  get email() {return this.loginForm.controls["email"]}
  get password() {return this.loginForm.controls["password"]}
  

  login(){
    console.log(this.loginForm.value)
    this.authService.signIn(this.email.value, this.password.value).then(res => {
      console.log('res', res);
    })
  }

  

}
