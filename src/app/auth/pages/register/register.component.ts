import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  newStudent: any;
  registerForm: FormGroup;
  constructor(
    private authService: AuthService,
    private _formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { 
    // this.isLogged()
  }

  ngOnInit(): void {
    this.registerForm = this._builderForm();
    // this.changeIsAdmin();
  }

  

  _builderForm() {
    // const pattern = '[a-zA-Z ]{2,254}';
    const form = this._formBuilder.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      age: ['', [Validators.required]],
      cellphone: ['', [Validators.required, Validators.pattern("(9)[0-9]*"),Validators.minLength(9), Validators.maxLength(9),]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],  
    });

    return form;
  }

  get name() {return this.registerForm.controls["name"]}
  get lastname() {return this.registerForm.controls["lastname"]}
  get age() {return this.registerForm.controls["age"]}
  get cellphone() {return this.registerForm.controls["cellphone"]}
  get email() {return this.registerForm.controls["email"]}
  get password() {return this.registerForm.controls["password"]}
  
  capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  formatUserData(){
    this.name.setValue(this.name.value.trim());
    this.name.setValue(this.capitalizeFirstLetter(this.name.value))

    this.lastname.setValue(this.lastname.value.trim());
    this.lastname.setValue(this.capitalizeFirstLetter(this.lastname.value))

    // this.age.setValue(this.age.value.trim());
    this.cellphone.setValue(this.cellphone.value.trim());
    this.email.setValue(this.email.value.trim());
    this.password.setValue(this.password.value.trim());
    
  }
  register(){
    let displayName = this.name.value + ' ' + this.lastname.value;
    this.authService.signUp(this.email.value, this.password.value).then(
      (res:any) => {
        console.log(res);
      }
    )
  }

}
