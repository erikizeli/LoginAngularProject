import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";



@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent {

  constructor(
    private router: Router,
    private http: HttpClient
    ) {
  }
  logout = async () => {

    const token:any = localStorage.getItem("token")
    const headers = new HttpHeaders().set('Content-Type','application/json').set("Authorization",`Bearer ${token}`);
    this.http.get("http://localhost:8080/api/v1/auth/logout",{ headers }).subscribe(
      response => {
        console.log(response)
      },
      error => {
        console.log(error)
      }
    )

    localStorage.setItem("loggedIn","false")
    this.router.navigate(["/login"])
  }
}
