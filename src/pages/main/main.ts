import { Component } from '@angular/core';

import { PrincipalPage } from '../principal/principal';
import { AddCitasPage } from '../add-citas/add-citas';
import { ShowCitasPage } from '../show-citas/show-citas';


@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  principalRoot = PrincipalPage
  addCitasRoot = AddCitasPage
  showCitasRoot = ShowCitasPage
  constructor() {}

}
