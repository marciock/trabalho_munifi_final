import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { EmailValidator } from './../../validators/email';
import { NovologinPage } from '../novologin/novologin';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loginForm: FormGroup;

  constructor(public navCtrl: NavController,public formBuilder: FormBuilder, public authData: AuthProvider,public navParams:NavParams) {
    
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required,
      EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6),
      Validators.required])]
    });
  }
  voltarPagina() {
    this.navCtrl.pop();
  }
  loginUser() {
    // verifica se o form foi preenchido corretamente
    if (!this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      // faz login usando o provider auth
      this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password)
        .then(authData => {

          this.navCtrl.setRoot(HomePage);

        }, error => {
            alert('Login / senha incorretos');
        });

    }
  }
  novologin(){
   // this.navParams.data=item;
    this.navCtrl.push(NovologinPage,this.navParams);
  }



}
