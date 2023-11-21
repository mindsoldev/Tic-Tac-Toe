import { Component, Input } from '@angular/core';

type SquareChar = 'X' | 'O';

@Component({
  selector: 'app-square',
  template: `
      <button>{{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class SquareComponent {

  @Input() value!: SquareChar;

}
