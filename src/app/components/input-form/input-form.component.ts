import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
})
export class InputFormComponent implements OnInit {
  firstNumber = new FormControl('', { 
    validators: [Validators.required, Validators.min(3), Validators.max(99), this.oddNumberValidator],
    updateOn: 'change'
  });

  sequenceLength = new FormControl('', [
    Validators.required, Validators.min(2)
  ]);

  @Output() inputData = new EventEmitter<{ firstNumber: number, sequenceLength: number }>();

  constructor() { }

  ngOnInit() {
    this.firstNumber.valueChanges.subscribe(() => {
      this.sendData();
    });

    this.sequenceLength.valueChanges.subscribe(() => {
      this.sendData();
    });
  }

  sendData() {
    const firstNumberValue = this.firstNumber.value !== null ? Number(this.firstNumber.value) : 0;
    const sequenceLengthValue = this.sequenceLength.value !== null ? Number(this.sequenceLength.value) : 0;

    if (firstNumberValue % 2 === 0 || firstNumberValue < 3 || firstNumberValue > 99 || sequenceLengthValue < 1) {
      this.inputData.emit({ firstNumber: 0, sequenceLength: 0 });
      return;
    }

    this.inputData.emit({ firstNumber: firstNumberValue, sequenceLength: sequenceLengthValue });
  }

  oddNumberValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const value = control.value;
    if (value % 2 === 0) {
      return { oddNumber: true };
    }
    return null;
  }
}
