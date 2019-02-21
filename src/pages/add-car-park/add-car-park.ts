import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CarPark } from '../../models/car-park/car-park.interface';
import firebase from 'firebase';

@Component({
  selector: 'page-add-car-park',
  templateUrl: 'add-car-park.html',
})
export class AddCarParkPage {

  carPark = {} as CarPark;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  addCarPark(carPark: CarPark){
    //create new anonymous object and convert numSpaces to a number
    //push this to the firebase db under carPark-list node
    firebase.firestore().collection("carParks").add({
      owner: firebase.auth().currentUser.uid,
      carParkName: this.carPark.carParkName,
      carParkLocation: this.carPark.carParkLocation,
      numSpaces: Number(this.carPark.numSpaces)
    });

        //reset/clear the add car park form
    this.carPark = {} as CarPark;

    //Navigate user back to the car park list page
    this.navCtrl.pop();
    };

}