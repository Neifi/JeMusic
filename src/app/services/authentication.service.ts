import { Injectable } from "@angular/core";
import { ConfigService } from "./config.service";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Router } from "@angular/router";
import { JwtAuthenticationResponse } from '../model/jwt-authentication-response';

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  constructor(
    private config: ConfigService,
    private http: HttpClient,
    private router: Router
  ) {}

  private 

  public authenticate(username: string, password: string) {
    let AUTHENTICATION_ENDPOINT: string =
    this.config.base_dev_endpoint + "/auth/login";


    return this.http
      .post<JwtAuthenticationResponse>(
        "http://localhost:8080/api/auth/login",
        { username, password },
        { observe: "response" }
        
      )
      .pipe(
        map((data) => {
          let token = data.body.token;
          
          
          //this.saveToken(token);
          //this.redirect();
          return data;
        })
      );
  }

  private redirect() {
    this.router.navigate(["tabs/tab1"]);
  }

  private saveToken(token){
    localStorage.setItem("token", token);
  }
}
