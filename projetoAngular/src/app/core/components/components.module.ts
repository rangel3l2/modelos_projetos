import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteComponent } from './teste/teste.component';

const COMPONENTS = [
  TesteComponent
]

@NgModule({
  declarations: [
    TesteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    COMPONENTS
  ]
})
export class ComponentsModule { }
