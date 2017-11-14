import { Component, OnInit } from '@angular/core';
import { AppGuard } from '../guard/app.guard';
import { Router, } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  constructor(private guard: AppGuard, private router: Router, private http: Http) {
  }
  Onclick() {
    this.http.post('http://192.168.99.100:8081/user', { email: this.email, password: this.password }).subscribe(response => {
      if (JSON.parse(response['_body']).result) {
        this.guard.SetUser(JSON.parse(response['_body']).result);
        this.guard.LogIn();
        this.router.navigate(['/friends']);
      }else {
        alert('!!!!Utilisteur Inconu Veuillez resaisir un Email et Password Valid !!!!');
        this.router.navigate(['/login']);
      }

    });

  }

  ngOnInit() {
    if (this.guard.canActivate() == true) { this.router.navigate(['/friends']); }
  }

}
