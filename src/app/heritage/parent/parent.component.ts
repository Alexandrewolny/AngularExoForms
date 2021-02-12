import { Component, OnInit } from '@angular/core';
import { User } from '../Iuser';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  tab = [{
    name: "Pierre",
    age: 45
  },
  {
    name: "Joseph",
    age: 38
  },
  {
    name: "Marie",
    age: 15
  },
  {
    name: "Anne",
    age: 29
  }]

  tab2 =[12,54,54,87,54];
  
  constructor() { }

  ngOnInit(): void {
  }

  add = (user : User) => {
    this.tab.push(user);
  }
}
