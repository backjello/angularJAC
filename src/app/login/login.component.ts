import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: any
  credenzialiErrate: boolean = false;
  erroreGenerico: boolean = false; 
  message: string | null = ''

  constructor(private fb: FormBuilder, private api: ApiService, private token:TokenService,
    private route:ActivatedRoute) {

    this.form = fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
    
    this.message = this.route.snapshot.paramMap.get('error')
  }

  submit() {
    const data = this.form.value
    this.erroreGenerico = false
    this.credenzialiErrate = false
    this.api.login(data.email, data.password).subscribe({
      next : (res) => { // solo in caso di successo (codice 2XX)
        console.log(res);
        this.token.setToken(res.token) //setto il token
      },
      error: (err) => { // solo per errore, codici 4XX e 5XX
        console.log(err);
        if( err.error.message == 'Invalid credentials'){
          this.credenzialiErrate = true
        }
        else{
          this.erroreGenerico = true
        }
      }
    })
  }

}
