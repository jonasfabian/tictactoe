import {Component, OnInit} from '@angular/core';
import {Field} from './Field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() {
  }

  turn = 0;

  // Array of 3 Array
  grid = [
    [new Field(0, ''), new Field(1, ''), new Field(2, '')],
    [new Field(3, ''), new Field(4, ''), new Field(5, '')],
    [new Field(6, ''), new Field(7, ''), new Field(8, '')]
  ];

  ngOnInit(): void {
  }

  setFieldValue(field: Field): void {
    this.grid.forEach(r => {
      r.forEach(l => {
        if (l.position === field.position) {
          if (this.turn % 2) {
            l.value = 'X';
          } else {
            l.value = 'O';
          }
          this.turn++;
          this.checkWin();
        }
      });
    });
  }

  checkWin(): void {
    if ((this.grid[0][0].value === 'X') && (this.grid[0][1].value === 'X') && (this.grid[0][2].value === 'X')) {
      alert('Winner winner chicken dinner');
    } else if ((this.grid[1][0].value === 'X') && (this.grid[1][1].value === 'X') && (this.grid[1][2].value === 'X')) {
      alert('Winner winner chicken dinner');
    } else if ((this.grid[2][0].value === 'X') && (this.grid[2][1].value === 'X') && (this.grid[2][2].value === 'X')) {
      alert('Winner winner chicken dinner');
    }
  }
}
