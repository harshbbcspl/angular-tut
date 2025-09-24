import { Component } from '@angular/core';
import { Signup } from '../signup/signup';

@Component({
  selector: 'app-login',
  imports: [Signup],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

}
