import { Component } from '@angular/core';
import { SequenceService } from '../services/sequence.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  sequence!: number[];
  sum!: number;
  product!: number;
  average!: number;
  
  constructor(private sequenceService: SequenceService) {}
  
  receiveInputData(data: { firstNumber: number, sequenceLength: number }) {
    this.sequence = this.sequenceService.calculateSequence(data.firstNumber, data.sequenceLength);
    this.sum = this.sequenceService.calculateSum(this.sequence);
    this.product = this.sequenceService.calculateProduct(this.sequence);
    this.average = this.sequenceService.calculateAverage(this.sequence);
  }
}
