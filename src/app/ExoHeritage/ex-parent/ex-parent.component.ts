import { Component, OnInit } from '@angular/core';
import { Users } from '../Iusers';

@Component({
  selector: 'app-ex-parent',
  templateUrl: './ex-parent.component.html',
  styleUrls: ['./ex-parent.component.css']
})
export class ExParentComponent implements OnInit {

    tab = [{
      prenom : "Alexandre",
      nom : " Wolny",
      age :  27

    }]

  constructor() { }

  ngOnInit(): void {
  }

  add = (user : Users) => {
    this.tab.push(user);
  }

}
