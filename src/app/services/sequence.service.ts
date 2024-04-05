import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SequenceService {

  constructor() { }

  calculateSequence(firstNumber: number, sequenceLength: number): number[] {
    let sequence: number[] = [];
    let current = firstNumber;
    for(let i = 0; i < sequenceLength; i++) {
      sequence.push(current);
      if(current % 2 == 0) current /= 2;
      else current = 3 * current + 1;
    }
    return sequence;
  }

  calculateSum(sequence: number[]): number {
    if (sequence.length == 0) return 0;
    let sum = 0;
    for (const num of sequence) sum += num;
    return sum;
  }

  calculateProduct(sequence: number[]): number {
    if (sequence.length == 0) return 0;
    let p = 1;
    for (const num of sequence) p *= num;
    return p;
  }

  calculateAverage(sequence: number[]): number {
    if (sequence.length == 0) return 0;
    return this.calculateSum(sequence) / sequence.length;
  }
}
