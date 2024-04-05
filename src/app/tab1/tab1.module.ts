import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { InputFormComponent } from '../components/input-form/input-form.component';
import { SequenceTableComponent } from '../components/sequence-table/sequence-table.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [Tab1Page, InputFormComponent, SequenceTableComponent]
})
export class Tab1PageModule {}
