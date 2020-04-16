import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.scss']
})
export class LogginComponent implements OnInit {

  loginForm: FormGroup;
  returnUrl: string;

  constructor(private fb: FormBuilder, private auth: AuthenticationService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email : [null, [Validators.required, Validators.email]],
      password : [null, Validators.required],
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/' ;
  }

  login(formData: NgForm) {
    return this.auth.login(formData).subscribe(
      (user) => {
        console.log(user);
        this.router.navigate([this.returnUrl]);
      });
  }

}
