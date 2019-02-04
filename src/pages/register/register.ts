import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  constructor(private fireAuth: AngularFireAuth, private toast: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  async register(user: User){
    try{
    const info = await this.fireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    
    //if info returns a result then go to the login page
    if(info){
      this.navCtrl.setRoot('LoginPage');
    }
    }
    catch(e){
      if(e.message == 'createUserWithEmailAndPassword failed: First argument "email" must be a valid string.' || e.message == 'createUserWithEmailAndPassword failed: Second argument "password" must be a valid string.'){
        this.toast.create({
        message: "Email and password must not be blank",
        duration: 3000,
        cssClass: "error"
      }).present();
      }
      else{
      this.toast.create({
        message: e,
        duration: 3000,
        cssClass: "error"
      }).present();
    }
    }
  }

  
}
