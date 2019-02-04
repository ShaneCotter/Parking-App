import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-car-park',
  templateUrl: 'car-park.html',
})
export class CarParkPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarParkPage');
  }

  signOut(){

    this.navCtrl.setRoot('LoginPage');
    window.location.reload();
    
  }

}
