import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms'


@Component({
  selector: 'app-formulairedynamique',
  templateUrl: './formulairedynamique.component.html',
  styleUrls: ['./formulairedynamique.component.css']
})
export class FormulairedynamiqueComponent implements OnInit {

  TeamForm : FormGroup;


  constructor( private fb: FormBuilder) {
    this.TeamForm = this.fb.group({
      membres : this.fb.array([
        this.fb.control('')
      ])
    })
   }

   get members(): FormArray {
     return this.TeamForm.get("membres") as FormArray
   }

   addMembre = () => {
     this.members.push(this.fb.control(''));
   }

   soumettre = () => {
     console.log(this.TeamForm.value);
   }

  ngOnInit(): void {
  }

}
