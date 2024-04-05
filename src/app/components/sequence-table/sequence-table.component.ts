import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sequence-table',
  templateUrl: './sequence-table.component.html',
  styleUrls: ['./sequence-table.component.scss'],
})
export class SequenceTableComponent  implements OnInit {
  @Input() sequence!: number[];
  @Input() sum!: number;
  @Input() product!: number;
  @Input() average!: number;

  constructor() { }

  splitSequenceIntoGroups(sequence: number[], parameter: number): number[][] {
    let groups = [];
    for(let i = 0; i < sequence.length; i += parameter) {
      groups.push(sequence.slice(i, i + parameter));
    }
    return groups;
  }

  ngOnInit() {}

}
