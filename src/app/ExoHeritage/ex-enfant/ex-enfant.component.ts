import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { Users } from '../Iusers';

@Component({
  selector: 'app-ex-enfant',
  templateUrl: './ex-enfant.component.html',
  styleUrls: ['./ex-enfant.component.css']
})
export class ExEnfantComponent implements OnInit {

  @Input() tab : [Users];
  @Output() newUtilisateur = new EventEmitter<Users>()
  userProfilForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userProfilForm = this.fb.group({
      nom: ["", [Validators.minLength(1), Validators.required]],
      prenom: ["", Validators.required],
      age: [null, Validators.required]
    })
  }

  ngOnInit(): void {
  }

  soumettre = () => {
    if (this.userProfilForm.valid) {
      this.add();
    } else {
      console.log("erreur")
    }
  }

  add = () => {
    this.newUtilisateur.emit(this.userProfilForm.value);
  }
}
