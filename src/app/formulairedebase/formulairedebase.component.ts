import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulairedebase',
  templateUrl: './formulairedebase.component.html',
  styleUrls: ['./formulairedebase.component.css']
})
export class FormulairedebaseComponent implements OnInit {

  userProfilForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userProfilForm = this.fb.group({
      nom: ["", [Validators.minLength(1), Validators.required]],
      prenom: ["jean", Validators.required],
      age: [45, Validators.required]
    })
  }

  ngOnInit(): void {
  }

  soumettre = () => {
    if (this.userProfilForm.valid) {
      console.log(this.userProfilForm.value);
    } else {
      console.log("erreur")
    }
  };
}
