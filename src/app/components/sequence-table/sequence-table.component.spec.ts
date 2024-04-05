import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SequenceTableComponent } from './sequence-table.component';

describe('SequenceTableComponent', () => {
  let component: SequenceTableComponent;
  let fixture: ComponentFixture<SequenceTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SequenceTableComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SequenceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should split sequence into groups', () => {
    const sequence = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const parameter = 3;
    const expectedGroups = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];
    const result = component.splitSequenceIntoGroups(sequence, parameter);
    expect(result).toEqual(expectedGroups);
  });

  fit('should split sequence into groups with parameter equal to sequence length', () => {
    const sequence = [1, 2, 3, 4, 5];
    const parameter = sequence.length;
    const expectedGroups = [[1, 2, 3, 4, 5]];
    const result = component.splitSequenceIntoGroups(sequence, parameter);
    expect(result).toEqual(expectedGroups);
  });

  fit('should split empty sequence into an empty group', () => {
    const sequence: number[] = [];
    const parameter = 5;
    const expectedGroups: number[][] = [];
    const result = component.splitSequenceIntoGroups(sequence, parameter);
    expect(result).toEqual(expectedGroups);
  });

  fit('should split sequence with parameter greater than sequence length into single groups', () => {
    const sequence = [1, 2, 3, 4, 5];
    const parameter = 10;
    const expectedGroups = [[1], [2], [3], [4], [5]];
    const result = component.splitSequenceIntoGroups(sequence, parameter);
    expect(result).toEqual(expectedGroups);
  });
});
