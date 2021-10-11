import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { storageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  userForm: FormGroup;
  usernameCtl: FormControl;
  passwordCtl: FormControl;

  constructor(
    private authService: AuthService,
    private storageService: storageService,
    private fb: FormBuilder
    ) { 
      this.usernameCtl = this.fb.control('', [Validators.required]);
      this.passwordCtl = this.fb.control('', [Validators.required]);

      this.userForm = this.fb.group(
        {
          username: this.usernameCtl,
          password: this.passwordCtl
        }
      );
    }

  ngOnInit(): void {
  }

  submit(){
    if(!this.userForm.valid){
      return;
    }

    const formVal = this.userForm.value;

    this.authService.signIn(formVal.username, formVal.password).subscribe(
      (data: any) => {
        console.log(data);
        this.storageService.saveToken(data.token);
      }
    )
  }

}
