import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  username = '';
  email = '';
  password = '';
  passwordRepeat = '';

  constructor() {}



  onChangeUsername( event: Event) {
    this.username = (event.target as HTMLInputElement).value;
  }

  onChangeEmail( event: Event) {
    this.email = (event.target as HTMLInputElement).value;
  }
  onChangePassword( event: Event) {
    this.password = (event.target as HTMLInputElement).value;
  }

  onChangePasswordRepeat( event: Event) {
    this.passwordRepeat = (event.target as HTMLInputElement).value;
  }

  isDisabled() {
    return this.password ? (this.password !== this.passwordRepeat) : true;
  }


  onClickSignUp() {
    console.log('clicked');

  }

}
