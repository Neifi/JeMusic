import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "src/app/services/authentication.service";
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from "@angular/forms";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
   loginForm: FormGroup;
  constructor(
    private authenticationService: AuthenticationService,
    public formBuilder: FormBuilder
  ) {

    this.loginForm = this.createLoginForm();
    
    

  }

  ngOnInit() {}

  public authenticate() {
    
    console.log("aaaaaa");

    console.log(this.loginForm.value);
   
    this.authenticationService
      .authenticate(
        "kroblou1@guardian.co.uk",
        "test"
      )
      .subscribe((data) => {
        console.log(data.body);
        console.log(data.status);
        
      });
  }

public log(){
  console.log(this.loginForm.value);
  
}

  private createLoginForm() {
    
    return this.formBuilder.group({
      username: ["", Validators.required, Validators.email],
      password: ["", Validators.required,Validators.min(4)],

      
    });
    
  }
}
