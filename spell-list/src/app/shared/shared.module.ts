import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './header/header.component';
import { FocusDirective } from './directives/focus.directive';
import { PreparedPipes } from './pipes/prepared.pipes';
import { SpellFormComponent } from './spell-form/spell-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DialogueCreateComponent } from './spell-form/dialogue-create/dialogue-create.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FocusDirective,
    PreparedPipes,
    SpellFormComponent,
    DialogueCreateComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FocusDirective,
    PreparedPipes,
    SpellFormComponent
  ]
})
export class SharedModule { }
