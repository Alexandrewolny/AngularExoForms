import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { FormulairedebaseComponent } from './formulairedebase/formulairedebase.component';
import { FormulairedynamiqueComponent } from './formulairedynamique/formulairedynamique.component';
import { ParentComponent } from './heritage/parent/parent.component';
import { EnfantComponent } from './heritage/enfant/enfant.component';
import { ExParentComponent } from './exoHeritage/ex-parent/ex-parent.component';
import { ExEnfantComponent } from './exoHeritage/ex-enfant/ex-enfant.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulairedebaseComponent,
    FormulairedynamiqueComponent,
    ParentComponent,
    EnfantComponent,
    ExParentComponent,
    ExEnfantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
