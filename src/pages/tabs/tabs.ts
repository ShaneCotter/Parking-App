import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { CarParkPage } from '../car-park/car-park';
import { SchedulePage } from '../schedule/schedule';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CarParkPage;
  tab3Root = SchedulePage;

  constructor() {

  }
}
