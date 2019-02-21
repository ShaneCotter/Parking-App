import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AddCarParkPage } from '../add-car-park/add-car-park';
import { CarPark } from '../../models/car-park/car-park.interface';
import firebase from 'firebase';

@Component({
  selector: 'page-car-park',
  templateUrl: 'car-park.html',
})
export class CarParkPage {

  //List to hold car parks returned from firestore
  carParks = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private actionSheetCtrl: ActionSheetController) {

  }

  getCarParkList(){
    firebase.firestore().collection('carParks')
    .where("owner", "==", firebase.auth().currentUser.uid)
    .get()
    .then((docs) => {
            
        docs.forEach((doc) => {
              this.carParks.push(doc.data());
        })

        //For debug purposes
        console.log(this.carParks);

      }).catch((error) => {
            console.log("Error getting documents: ", error)
        })
  }

  selectCarPark(carPark: CarPark){
    //Display actions that allow the admin to edit/delete a car park
    this.actionSheetCtrl.create({
      title: `${carPark.carParkName}`,
      buttons:[
        //edit 
        {
          text: 'Edit',
          handler: () => {
            //Send user to edit carPark page and pass key as a parameter

          }
        },
        //Delete
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            //Delete the current carPark
            //firebase.firestore().collection('carParks').where("id", "==", carPark.)
          }
        },
        //Cancel
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("The user has selected the cancel button");
          }
        }
      ]
    }).present();
  }

  navigateToAddCarPark(){
    this.navCtrl.push(AddCarParkPage);
  }

  signOut(){

    this.navCtrl.setRoot('LoginPage');
    window.location.reload();
    
  }

  
  ionViewDidLoad() {
    //Gets the car park list when the page loads
    this.getCarParkList();
  } 

}
