import { TestBed } from '@angular/core/testing';

import { SequenceService } from './sequence.service';

describe('SequenceService', () => {
  let service: SequenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SequenceService);
  });

  fit('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('should calculate sequence correctly', () => {
    const firstNumber = 3;
    const sequenceLength = 5;
    const expectedSequence = [3, 10, 5, 16, 8];
    const sequence = service.calculateSequence(firstNumber, sequenceLength);
    expect(sequence).toEqual(expectedSequence);
  });

  fit('should calculate sum correctly', () => {
    const expectedSum = 42;
    const sequence = [3, 10, 5, 16, 8];
    const sequenceSum = service.calculateSum(sequence);
    expect(sequenceSum).toEqual(expectedSum);
  });

  fit('should return 0 for sum', () => {
    const expectedSum = 0;
    const sequence: number[] = [];
    const sequenceSum = service.calculateSum(sequence);
    expect(sequenceSum).toEqual(expectedSum);
  });

  fit('should calculate product correctly', () => {
    const expectedProduct = 19200;
    const sequence = [3, 10, 5, 16, 8];
    const sequenceProduct = service.calculateProduct(sequence);
    expect(sequenceProduct).toEqual(expectedProduct);
  });

  fit('should return 0 for product', () => {
    const expectedProduct = 0;
    const sequence: number[] = [];
    const sequenceSum = service.calculateSum(sequence);
    expect(sequenceSum).toEqual(expectedProduct);
  });

  fit('should calculate average correctly', () => {
    const expectedAverage = 8.4;
    const sequence = [3, 10, 5, 16, 8];
    const sequenceAverage = service.calculateAverage(sequence);
    expect(sequenceAverage).toEqual(expectedAverage);
  });

  fit('should return 0 for average', () => {
    const expectedAverage = 0;
    const sequence: number[] = [];
    const sequenceSum = service.calculateSum(sequence);
    expect(sequenceSum).toEqual(expectedAverage);
  });
});
